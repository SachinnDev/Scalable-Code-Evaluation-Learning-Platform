//problem ko create, delete,fetch,update karna ,uske liye code hai yaha
const express=require("express");
const adminMiddleware=require("../middleware/adminMiddleware")
const problemRouter= express.Router();


problemRouter.post("/create",CreateProblem);
problemRouter.patch("/:id",UpdateProblem);
problemRouter.delete("/:id",DeleteProblem);

problemRouter.get("/:id",getProblemById);
problemRouter.get("/",getAllProblem);
problemRouter.get("/user",solvedAllProblembyUser);