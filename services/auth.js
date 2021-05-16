const { CatalogMongoModel, UserMongoModel, ProductMongoModel, ActivityMongoModel } = require('../models/index');
const response = require('../constants/responseConstants')
const mailer = require('../constants/mailer')
const { v4: uuidv4 } = require('uuid');
const Promise = require('bluebird')
const utility = require("../config/utility");
const bcrypt = require("bcrypt");
const _ = require('lodash');
const jwt_sign = require('./middleware/jwt/jwt');
const { errorResponse } = require('../constants/responseConstants');

module.exports={
    register :async (req,res)=>{
        let userDetails= req.body;
        let userValidate = await UserMongoModel.findOne({email:userDetails.email});
        if(userValidate) return response.errorResponse(401,'User Already Registered');

        let enc_password = await bcrypt.hash(userDetails.password,10);
        let otp = utility.randomNumber(4);

        let html = "<p>Please Confirm your Account.</p><p>OTP: "+otp+"</p>";

        var user = {
            name: userDetails.name,
            mobile: userDetails.mobile,
            email:userDetails.email,
            password:enc_password,
            otp,
            role:userDetails.role,
        }

        let verifyMail = await mailer.send(
            'lucky.shub34@gmail.com', 
            userDetails.email,
            "Confirm Account",
            html
        )
        console.log("verifymail",verifyMail);
        if(!verifyMail)  return response.errorResponse(500, 'Internal server Error');
        let createUser = await UserMongoModel.create(user)
        if(!createUser) return response.errorResponse(500, 'Internal server Error');

        return response.successResponse(createUser,null,"User Succesfully  Registered");

    },
    login : async(req,res)=>{
        try {
        let userdetails = req.body;
        let userValidate = await UserMongoModel.findOne({email:userdetails.email});
        if(!userValidate) return response.errorResponse(403,"Invalid Credentials");

        let passwordMatches = await bcrypt.compare(userdetails.password,userValidate.password);
        if(!passwordMatches) return response.errorResponse(403,"Invalid Password");
        
        const JwtPayload = {
            userId:userValidate._id,
            email :userValidate.email,
            password : userValidate.password

        };
        let payload = await jwt_sign.sign(JwtPayload);
        return response.successResponse(payload,null,`Welcome ${userValidate.name}`);
 }
   catch (err) {
       return response.somethingWentWrong(500);
   }
    },
    verifyUser: async (req,res)=>{
        let userDetails= req.body;
        let userValidate = await UserMongoModel.findOne({email:userDetails.email});
        if(!userValidate) return response.errorResponse(401,'User Not registered');
        if(userValidate.otp !== userDetails.otp) return response.errorResponse(500,'Invalid OTP');
        let userUpdate = await UserMongoModel.updateOne({email:userDetails.email},{isVerified:true});
        if(!userUpdate) return response.somethingWentWrong(500);

        return response.successResponse(null,null,"User Succesfully  verified");

    }
}