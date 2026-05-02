//problem ko create, delete,fetch,update karna ,uske liye code hai yaha
const express=require("express");
const adminMiddleware=require("../middleware/adminMiddleware")
const problemRouter= express.Router();
const createProblem=require("../controllers/userProblem")

problemRouter.post("/create",adminMiddleware ,createProblem);
// problemRouter.patch("/update/:id",UpdateProblem);
// problemRouter.delete("/delete/:id",DeleteProblem);

// problemRouter.get("/ProblemById/:id",getProblemById);
// problemRouter.get("/getAllProblem",getAllProblem);
// problemRouter.get("/ProblemSolvedByUser",solvedAllProblembyUser);

module.exports=problemRouter;