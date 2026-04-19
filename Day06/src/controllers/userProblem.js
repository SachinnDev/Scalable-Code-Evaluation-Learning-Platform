const {getLanguageById,submitBatch,submitToken} =require("../utils/problemUtility");
const Problem=require("../models/problem")


const createProblem=async (req,res)=>{
   const{title,description,difficulty,tags,visibleTestCases,hiddenTestCases,startCode,referenceSolution,problemCreator}=req.body;
   
   try{
       for(const {language,completeCode} of referenceSolution){
         
        //source code
        //language_id
        //standard i/p
        //expected o/p
        const languageId=getLanguageById(language);
        
        // here we are craeting batch submissions
        const submissions= visibleTestCases.map((testcase)=>({
          source_code:completeCode,
        language_id:languageId,
        stdin:testcase.input,
        expected_output:testcase.output
       }));

       const submitResult = await submitBatch(submissions);

      const resultToken = submitResult.map((value) => value.token)

       const testResult=await submitToken(resultToken);

       for(const test of testResult){
        if(test.status_id!=3){
          return res.status(400).send("Error Occured")
        }
       }



      }
     

     //now we can store reference soln.(data) into db
  const userProblem =await Problem.create({
    ...req.body,
    problemCreator:req.result._id
  });
  
res.status(201).send("Problem Saved Successfully");
}
   catch (err) {
    res.status(400).send("Error: " + err);
  }
}

const updateProblem= async (req,res)=>{
  const {id}=req.params
  
    const{title,description,difficulty,tags,visibleTestCases,hiddenTestCases,startCode,referenceSolution,problemCreator}=req.body;
    try{
      if(!id){
        return res.status(400).send("Missing ID Field");
      }

      const DsaProblem= await Problem.findById(id);
      if(!DsaProblem){
        return res.status(404).send("ID is not present in server") 
      }

for(const {language,completeCode} of referenceSolution){
         
        //source code
        //language_id
        //standard i/p
        //expected o/p
        const languageId=getLanguageById(language);
        
        // here we are craeting batch submissions
        const submissions= visibleTestCases.map((testcase)=>({
          source_code:completeCode,
        language_id:languageId,
        stdin:testcase.input,
        expected_output:testcase.output
       }));
       const submitResult = await submitBatch(submissions);

      const resultToken = submitResult.map((value) => value.token)

       const testResult=await submitToken(resultToken);

       for(const test of testResult){
        if(test.status_id!=3){
          return res.status(400).send("Error Occured")
        }
       }
      }
   const newProblem=await Problem.findByIdAndUpdate(id,{...req.body},{runValidators:true,new:true});
   res.status(200).send(newProblem);
  }
  catch(err){
        res.status(404).send("Error:"+err)
  }
}

const deleteProblem= async (req,res)=>{
    const {id}=req.params;

  try{
   
    if(!id)
      return res.status(400).send("ID id Missing");

    const deletedProblem= await Problem.findByIdAndDelete(id)
  
  if(!deletedProblem)
    return res.status(404).send("Problem is Missing");

  res.status(200).send("Successfully Deleted")
}
  catch(err){
    res.status(500).send("Error:"+err)
  }
}
const getProblemById=async (req,res)=>{
  const {id}=req.params ;
  try{
    if(!id)
      return res.status(400).send("ID is Missing");
    const getProblem = await Problem.findById(id);

    if(!getProblem)
      return res.status(404).send("Problem is Missing");

    res.status(200).send(getProblem);
  }
  catch(err){
    res.status(500).send("Error:"+err);
  }
}

const getAllProblem=async (req,res) => {
  const {id}=req.params ;
  try{
    const getProblem=await Problem.find({});
    if(getProblem.length==0)
      return res.status(404).send("Problem is Missing");

    res.status(200).send(getProblem);
  }
  catch(err){
    res.status().send("Error:"+err)
  }
  
} 


module.exports={createProblem,updateProblem,deleteProblem,getAllProblem};