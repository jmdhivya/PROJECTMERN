const mongoose = require('mongoose')
const connectDB = ()=>{
    try{
        mongoose.connect(process.env.DBUrl)
        console.log('DB connected')
    }
    catch{
        console.log(err)
    }
}
module.exports=connectDB