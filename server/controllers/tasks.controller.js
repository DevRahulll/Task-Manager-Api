

const getTasks=(req,res)=>{
    res.send("HEllo World");
}

const getsingleTasks=(req,res)=>{
    res.send("Single tasks");
}

const addTasks=(req,res)=>{
    res.send({
        message:true,
        success:false
    })
}

const editTasks=(req,res)=>{
    res.send("HEllo World");
}


const deleteTasks=(req,res)=>{
    res.send("HEllo World");
}


module.exports={
    getTasks,
    addTasks,
    editTasks,
    deleteTasks,
    getsingleTasks
}