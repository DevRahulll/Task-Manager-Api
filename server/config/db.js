const mongoose = require('mongoose')

const connectToDB = mongoose
    .connect(``)
    .then(()=>{
        console.log('connect to DB successfully...');
    })
    .catch((error)=>console.log("Error in connecting DB",error))

module.exports=connectToDB;