const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        required:true
    },
    token:{
        type:String,
        default:""
    },
    otp:{
        type:Number,
        required:true
    },
    isVerified:{
        type:String,
        default:false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);