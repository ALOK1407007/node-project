const express=require('express')
let taskRouter=express.Router()
let {getTasks,postTask,getTask,updateTask,deleteTask}=require('../controllers/taskController')

//route to create task
taskRouter.get('/task',getTasks)
//route to post task
taskRouter.post('/task',postTask)
//get one task
taskRouter.get('/task/:id',getTask)
//put one task
taskRouter.put('/task/:id',updateTask)
//delete the task
taskRouter.delete('/task/:id',deleteTask)


module.exports=taskRouter;