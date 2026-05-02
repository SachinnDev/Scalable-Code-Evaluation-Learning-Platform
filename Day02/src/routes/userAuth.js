const express=require("express");
const authRouter=express.Router();

//register
authRouter('/register',register);//',' ke baad jo rgister,login etc naam ke function likha hai it is called         'controller'
authRouter('/login',login);
authRouter('/logout',logout);
authRouter('/getProfile',getProfile);
//login
//logout
//GetProfile