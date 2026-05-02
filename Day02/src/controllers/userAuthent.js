const User=require("../models/user")
const validate=require('../utils/validator')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const register= async (req,res)=>{
    try{
        //validate the data...(validator fuction is made in validator.js file)
      const {firstName,emailId,password}= req.body;
           
     //check whether the given emailid already exits or not
    //  const ans=User.exits({emailId});                  (//required nahi hai bcz user.create me hi check hojata hai)
    req.body.password=await bcrypt.hash(password,10)
    
     const user= await User.create(req.body); 
     //token creation
    const token= jwt.sign({_id:user._id , emailId:emailId},process.env.JWT_KEY,{expiresIn:60*60})
    res.cookie('token',token,{maxAge:60*60*1000});   
    res.status(201).send("User Registered Successfully");  
    }
    catch(err){
        res.status(400).send("Error:"+err);

    }
}
const login= async (req,res)=>{
    try{
        const {emailId,pasword}=req.body;
        if(!emailId)
            throw new Error("Invalid Credemtials");
        if(!password)
            throw new Error("Invalid Credential");
        const user=await User.findOne({emailId});
        //verifying passowrd
        const match= bcrypt.compare(password,user.password)
        if(!match)
            throw new Error("Invalid Credentials")
        //create token
        const token=jwt.sign({_id:user._id,emailId:emailId},proccess.env.JWT_KEY,{expiresIn:60*60});
        res.cookie('token',token,{maxAge:60*60*100});
        res.status(200).send("Logged In Successfully");
    }
    catch(err){
        res.status(401).send("Error:"+err);
    }
}
const logout=(req,res)=>{
    try{
       
    }
    catch(err){

    }
}