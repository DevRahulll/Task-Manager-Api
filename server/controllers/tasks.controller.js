const express=require('express')

const getTasks=(req,res)=>{
    res.send("HEllo World");
}

const addTasks=(req,res)=>{
    res.send({
        message:true,
        success:false
    })
}

module.export={
    getTasks,
    addTasks
}