require('dotenv').config()
const mongoose = require('mongoose')
function connectDb() 
{

    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
}

module.exports = connectDb