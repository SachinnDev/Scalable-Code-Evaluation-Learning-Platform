const mongoose=require("mongoose");
const{Schema}=mongoose;

const problemSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    problemId:{
        type:Schema.Types.ObjectId,
        ref:'Problem',
        required:true
    },
    code:{
        type:String,
        required:true
    },
    language:{
        type:String,
        enum:['javascript','python','c++','java','c','typescript'], //expanded language support
        required:true
    },
    status:{ 
        type:String ,
        default:'pending',
        enum:['pending','accepted','wrong','error']
 } ,
     runtime:{
      type:'Number',   //time complexity of your submission
      default: 0
      },
    memory:
        {
      type:'Number',  //space complexity of your submission
      default: 0 
        },
    errorMessage:          
        {
        type:'Number',
      default: ''
        },
    testCasesPassed :{
        type:'Number',
      default: 0
    }   ,
    testCasesTotal :{
        type:'Number',
      default: 0 
    }
    } , {
        timestamps:true  //it tells us the time of submission. using which we can tell date and time of submisssion
    } ); 

const Problem=mongoose.model('problem',problemSchema);

module.exports=Problem;