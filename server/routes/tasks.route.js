const express=require('express')
const router=express.Router()
const {getTasks}=require('../controllers/tasks.controller.js')



// for fetching all tasks
router.get('/api/tasks',getTasks)

router.post('/api/tasks',addTasks)


module.exports=router;