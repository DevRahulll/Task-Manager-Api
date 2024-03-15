const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async () =>
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('connect to DB successfully...');
        })
        .catch((error) => console.log("Error in connecting DB", error))

module.exports = connectToDB;