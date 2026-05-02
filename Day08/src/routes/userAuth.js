const express=require("express");
const authRouter=express.Router();
const{register,login,logout,adminRegister}= require('../controllers/userAuthent')
const userMiddleware=require("../middleware/userMiddleware")
const adminMiddleware=require('../middleware/adminMiddleware')
//register
authRouter.post('/register',register);//',' ke baad jo rgister,login etc naam ke function likha hai it is called         'controller'
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware ,logout);
authRouter.post('/admin/register', adminMiddleware,adminRegister);
// authRouter('/getProfile',getProfile);

module.exports= authRouter;
//login
//logout
//GetProfile