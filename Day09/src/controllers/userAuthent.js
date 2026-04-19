const redisClient = require("../config/redis")
const User=require("../models/user")
const validate=require('../utils/validator')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const Submission=require("../models/submission")

const register= async (req,res)=>{
    try{
        //validate the data...(validator fuction is made in validator.js file)
      const {firstName,emailId,password}= req.body;
           
     //check whether the given emailid already exits or not
    //  const ans=User.exits({emailId});                  (//required nahi hai bcz user.create me hi check hojata hai)
    req.body.password=await bcrypt.hash(password,10)
    req.body.role='user'; // "/register" route se sirf user hi register hoga and not admin
     const user= await User.create(req.body); 
     //token creation
    const token= jwt.sign({_id:user._id , emailId:emailId},process.env.JWT_KEY,{expiresIn:60*60})
    const reply={
            firstName: user.firstName,
            emailId:user.emailId,
            _id:user._id
        }
    res.cookie('token',token,{maxAge:60*60*1000});   
    res.status(201).json({
          user:reply,
          message:"Registered successfully"
        })  
    }
    catch(err){
        res.status(400).send("Error:"+err);

    }
}
const login= async (req,res)=>{
    try{
        const {emailId,password}=req.body;
        if(!emailId)
            throw new Error("Invalid Credemtials");
        if(!password)
            throw new Error("Invalid Credential");
        const user=await User.findOne({emailId});
        //verifying passowrd
        const match= await bcrypt.compare(password,user.password)
        if(!match)
            throw new Error("Invalid Credentials")
        //create token
        const reply={
            firstName: user.firstName,
            emailId:user.emailId,
            _id:user._id,
            role: user.role
        }
        const token=jwt.sign({_id:user._id,emailId:emailId,role: user.role},process.env.JWT_KEY,{expiresIn:60*60});
        res.cookie('token',token,{maxAge:60*60*1000});
        res.status(200).json({
          user:reply,
          message:"loggin successfully"
        })
    }
    catch(err){
        res.status(401).send("Error:"+err);
    }
}

const adminRegister=async(req,res)=>{
    try{
        //validate the data...(validator fuction is made in validator.js file)
      const {firstName,emailId,password}= req.body;
           
     //check whether the given emailid already exits or not
    //  const ans=User.exits({emailId});                  (//required nahi hai bcz user.create me hi check hojata hai)
    req.body.password=await bcrypt.hash(password,10)
    req.body.role='admin'; // "/register" route se sirf user hi register hoga and not admin
     const user= await User.create(req.body); 
     //token creation
    const token= jwt.sign({_id:user._id , emailId:emailId, role:'admin'},process.env.JWT_KEY,{expiresIn:60*60})
    res.cookie('token',token,{maxAge:60*60*1000});   
    res.status(201).send("Admin Registered Successfully");  
    }
    catch(err){
        res.status(400).send("Error:"+err);

    }
}
const logout= async(req,res)=>{
    try{
       //validate the token
       //token add kar dunga in redis blocklist
       //cookies ko clear kardengay....
       const {token}=req.cookies;
       const payload=jwt.decode(token);
       await redisClient.set(`token:${token}`,'Blocked')
       await redisClient.expireAt(`token:${token}`,payload.exp)

       res.cookie("token",null,{expires:new Date(Date.now())});
       res.send("Logged out successfully")
    }
    catch(err){
       res.status(503).send("Error:"+err);
    }
}

const deleteProfile=async(req,res)=>{
    try{
       const userId=req.result._id ;
       //delted form userSchema 
       await User.findByIdAndDelete(userId);
       //deletion form submission schema as well
       //await Submission.deleteMany({userId});
       res.status(200).send("Deleted Successfully")
    }
    catch(err){
       res.status(500).send("Server Error")
    }
}
module.exports={register,login,logout,adminRegister ,deleteProfile };