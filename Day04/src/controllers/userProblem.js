const {getLanguageById,submitBatch} =require("../utils/problemUtility");



const createProblem=async (requestAnimationFrame,res)=>{
   const{title,description,difficulty,tags,visibleTestCases,hiddenTestcases,startCode,referenceSolution,problemCreator}=req.body;
   
   try{
       for(const {language,completeCode} of referenceSolution){
         
        //source code
        //language_id
        //standard i/p
        //expected o/p
        const languageId=getLanguageById(language);
        
        // here we are craeting batch submissions
        const submissions= visibleTestCases.map((input,output)=>({
          source_code:completeCode,
        language_id:languageId,
        stdin:input,
        expected_output:output
       }));

       const submitResult = await submitBatch(submissions);
       
      }}

   catch (err) {
    console.error(err);
    res.status(500).send("Error: " + err);
  }
};
