require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const route= require('./routes/User') 
const User = require('./DataBase/db');
const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("DataBase Connect SuccessFull")})
.catch((err)=>{console.log(`DataBase Connection fail ${err}`)})

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));
app.set(express.static("public"));

app.use("/user",route);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server start on ${port}`);
});