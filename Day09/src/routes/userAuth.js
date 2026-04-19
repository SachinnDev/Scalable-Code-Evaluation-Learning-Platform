const express=require("express");
const authRouter=express.Router();
const{register,login,logout,adminRegister,deleteProfile}= require('../controllers/userAuthent')
const userMiddleware=require("../middleware/userMiddleware")
const adminMiddleware=require('../middleware/adminMiddleware')
//register
authRouter.post('/register',register);//',' ke baad jo rgister,login etc naam ke function likha hai it is called         'controller'
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware ,logout);
authRouter.post('/admin/register', adminMiddleware,adminRegister);
// authRouter('/getProfile',getProfile);
authRouter.delete('/deleteProfile',userMiddleware,deleteProfile);
authRouter.get('/check',userMiddleware,(req,res)=>{
    const reply={
        firstName:req.result.firstName,
        emailId:req.result.emailId,
        _id:req.result._id,
        role: req.result.role
    }
    res.status(200).json({
        user:reply,
        message:"Valid User"
    });
})
module.exports= authRouter;
//login
//logout
//GetProfile