const express = require('express');
const app = express();



app.get("/apple",(req,res,next)=>{
    console.log("Hello ra puka");
    next();
},(req,res)=>{
    res.send("Apple tinu ra puka");
});



app.listen(3000);