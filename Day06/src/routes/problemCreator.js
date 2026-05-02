//problem ko create, delete,fetch,update karna ,uske liye code hai yaha
const express=require("express");
const adminMiddleware=require("../middleware/adminMiddleware")
const problemRouter= express.Router();
const {createProblem,updateProblem,deleteProblem,getProblemById}=require("../controllers/userProblem")
const userMiddleware=require("../middleware/userMiddleware")


problemRouter.post("/create",adminMiddleware ,createProblem);
problemRouter.put("/update/:id",adminMiddleware ,UpdateProblem);
problemRouter.delete("/delete/:id",adminMiddleware ,DeleteProblem);

problemRouter.get("/ProblemById/:id",userMiddleware,getProblemById);
problemRouter.get("/getAllProblem",userMiddleware,getAllProblem);
problemRouter.get("/ProblemSolvedByUser",userMiddleware,solvedAllProblembyUser);

module.exports=problemRouter;