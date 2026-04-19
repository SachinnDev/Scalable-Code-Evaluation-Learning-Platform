const express = require('express')
const submitRouter= express.Router();
const userMiddleware=require("../middleware/userMiddleware");
constCode=require("../controllers/userSubmission")

submitRouter.post("/submit/:id",userMiddleware,submitCode);