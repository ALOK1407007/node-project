const express=require('express')
let app=express()
var methodOverride = require('method-override')
const mongoose=require('mongoose')
const {engine}=require('express-handlebars')
let port=5000
const taskRouter=require('./routes/taskRoutes')
async function db(){
     await mongoose.connect('mongodb://127.0.0.1:27017/Task-manager')
     console.log("mongoose is connected");
}
db()
// inbuild middle ware
app.use(express.static('public'))
//to use the form data
app.use(express.urlencoded({extended:false}))


app.use(methodOverride('_method'))
//mount template engine
 app.engine("handlebars",engine())
 app.set("view engine","handlebars")


// "/"---root route in the case express
//"/task-manager"--root route in the case task-manager

//router level middleware
app.use('/task-manager',taskRouter)
// http://localhost:5000/task-manager/task
app.listen(port,(err)=>{
     if(err){
          throw err
     }
     else{
          console.log("port is working");
     }
})

