const mongoose=require("mongoose");
const{Schema}=mongoose;

const problemSchema= new Schema({
    title:{
        type:String,
        reqire:true
    },
    description:{
        type:String,
        require:trye
    },
    difficulty:{
        type:String,
        enum:['Easy','Medium','Hard']
    },
    tags:{
        type:String,
        enum:['Array','Linkedlist','Grpah','DP','Tree'],
        required:true
    },
    visibleTestCases:[
      { input:{ 
        type:String,
        require:true,
    },
    output:{
       type:String,
        require:true 
    },
    explanation:{
       type:String,
        require:true 
 } }],
     hiddenTestCases:[
      { input:{ 
        type:String,
        require:true,
    },
    output:{
       type:String,
        require:true 
    }
    }],
    startCode:[
        {
            language:{
                type:String,
                require:true
            },
            initialCode:{
                type:String,
                require:true
            }
        }
    ],
    referenceSolution:[          //actual solution
        {
            language:{
                type:String, 
                require:true
            },
            completeCode:{
                type:String,
                require:true
            }
        }
    ],
    problemCreator:{
        type:Schema.Types.ObjectId,
        ref:'user',
        require:true
    } 

})


const Problem=mongoose.model('problem',problemSchema);

module.exports=Problem;