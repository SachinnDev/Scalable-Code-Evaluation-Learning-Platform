const Problem=require("../models/problem")
const Submission=require("../models/submission")
const {getlanguageById, submitBatch,submitToken}=require("..utils/problemUtility");
const submitCode=async (req,res)=>{
  try{
     const userId=req.result._id;
     const problemId=req.params.id;

     const {code,langauge}=req.body ;

     if(!user||!code||!problemId||!langauge)
        return res.status(400).send("Some Field Missing");

   //fetch the problem form db
   const problem=await Problem.findById(problemId);
   //testCases (hidden waale)

   const submittedResult=await Submission.create({
    userId,
    problemId,
    code,
    language,
    testCasesPassed:0,
    status:'pending',
    testCasseToatal:problem.hiddenTestCases.length 
   })

   //submit problem yo judge0
    const languageId=getlanguageById(language);
    const submissions= problem.hiddenTestCases.map((testcase)=>({
          source_code:code,
        language_id:languageId,
        stdin:testcase.input,
        expected_output:testcase.output
       }));
  const submitResult = await submitBatch(submissions);
  const resultToken = submitResult.map((value)=>value.token);
  const testResult=await submitToken(resultToken);

  // updating the submitresult
  let testCasesPassed=0;
  let runtime=0;
  let memeory=0;
  let status='accepted';
  let errorMessage=null

  for(const test of testResult){
    if(tetst.status_id==3){
        testCasespassed++ ;
        runtime=runtime+parseFloat(test.time) ;
        memory=Math.max(memory,test.memory);
    }else{
        if(test.status_id==4){
            status ='error'
            errorMessage="test.stderr"
        }
        else{
            status ='wrong'
            errorMessage="test.stderr"
        }
    }
  }
  //store the result in database
  submittedResult.status=status ;
  submittedResult.testCasesPassed=testCasesPassed;
  submittedResult.errorMessage=errorMessage;
  submittedResult.runtime=runtime;
  submittedResult.memory=memeory;

  await submittedResult.save();

  res.status(201).send(submittedResult)
    }
  
  catch(err){
    res.status(500).send("Internal Server Error")
  }
}

module.exports=submitCode;