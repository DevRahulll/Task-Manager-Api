const express=require('express')
const app=express();
const router=require('./routes/tasks.route');
const connectToDB=require('./config/db.js')

// connecting to database
connectToDB()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use('/api/tasks',router);



module.exports=app;