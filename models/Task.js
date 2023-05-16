let mongoose=require('mongoose')

//schema,stores data in db,let's us have validations for the data

let TaskSchema=new mongoose.Schema({
     task:{
          type:String,
          required:true,
          trim:true  
     },
},{timestamps:true})

module.exports=mongoose.model('task',TaskSchema)