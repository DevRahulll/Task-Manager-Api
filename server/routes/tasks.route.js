const express=require('express')
const router=express.Router()
const {getTasks,addTasks,getsingleTasks,deleteTasks,editTasks}=require('../controllers/tasks.controller.js')



// for fetching all tasks
router.get('/',getTasks)

// receiving a single tasks
router.get('/:id',getsingleTasks)

// creating a single tasks
router.post('/',addTasks)

// editing a delete tasks
router.put('/:id',editTasks)

// deleting a tasks
router.delete('/:id',deleteTasks)


module.exports=router;