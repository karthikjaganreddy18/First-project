const express = require("express");
const dotEnv = require('dotenv');
const app = express()
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
dotEnv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Mongodb connected successfully"))
.catch((error)=>console.log(error))


app.listen(PORT, ()=>{
    console.log(`server started and running at ${PORT}`);
})
app.use('/',(req,res)=>{
    res.send("<h1>Welcome to website")
})


