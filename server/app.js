const express=require('express')
const app=express();
const router=require('./routes/tasks.route');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use('/',router);



module.exports=app;