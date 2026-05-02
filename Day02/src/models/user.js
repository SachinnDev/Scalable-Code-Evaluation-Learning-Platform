const mongoose=require('mongoose');
const{Schema}=mongoose;

const userSchema=new Schema({
    firtsName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type:String ,
        minLength:3,
        maxLength:20
    },
    emailId:{
       type:String,
       required:true,
       unique:true,
       trim:true,
       lowercase:true,
       immutable:true,
    },
    age:{
        type:Number,
        min:6,
        max:80,
    },
    role:{
        type:String,
        enum:['user','admin'],
        defualt:'user'
    },
    problemSplved:{
        type:[string]
    },
    pasword:{
      type:String,
      required:true
    }
},  {timestamps:true})

const user=mongoose.module("user",userSchema);
module.exports=User;