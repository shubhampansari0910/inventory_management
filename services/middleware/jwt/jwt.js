const jwt = require("jsonwebtoken");
const Response = require('../../../constants/responseConstants');
const {  UserMongoModel } = require('../../../models/index');

module.exports={
    sign: async(JwtPayload)=>{
        let secret = process.env.JWT_SECRET;
        const jwtData = {
            expiresIn:process.env.JWT_TIMEOUT_DURATION
        }
        JwtPayload.token = jwt.sign(JwtPayload, secret, jwtData);
        let updateToken = await UserMongoModel.updateOne({email:JwtPayload.email},{$set:{token:JwtPayload.token}})
        
        if(updateToken.nModified != 1) return response.somethingWentWrong(500);

        return JwtPayload;
    },
    authenticate: async(req,res,next)=>{
        const token = req.body.token || req.query.token || req.headers.token;
        const userId = req.body.userid || req.query.userid || req.headers.userid;
        if(token)
        {
            try
                {
                    decoded =  jwt.verify(token, process.env.JWT_SECRET);
                    let user = await UserMongoModel.findOne({_id:userId,token:token});
                    if(!user) return res.status(403).send(Response.errorResponse(403, 'Invalid User'));
                    return next();
                }
            catch(err)
                {
                    return res.status(403).send(err);
                }
        }
        else{
            return res.status(403).send(Response.errorResponse(403, 'Please login to continue'));
        }
            
    }
}