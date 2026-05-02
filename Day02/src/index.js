const express=require("express");
const app=express();
require('dotenv').config();
const main=require('./config/db')
const cookieparser =require('cookie-parser');


app.use(express.json());
app.use(cookieparser())
main()
.then(async ()=>{
     app.listen(process.env.PORT ,()=>{
       console.log("server listening at port number:"+process.env.PORT);
    
})

})
.catch(err=>console.log("Error Occured:"+err));
