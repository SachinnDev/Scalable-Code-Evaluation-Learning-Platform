//problem ko create, delete,fetch,update karna ,uske liye code hai yaha
const express=require("express");

const problemRouter= express.Router();
problemRouter.post("/create",problemCreate);
problemRouter.patch("/:id",problemUpdate);
problemRouter.delete("/:id",problemDelete);

problemRouter.get("/:id",problemFetch);
problemRouter.get("/",getAllproblem);
problemRouter.get("/user",solvedProblem);