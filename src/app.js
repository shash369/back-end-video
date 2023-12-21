import express  from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send("");
})

app.listen(process.env.PORT,()=>{
    console.log("express in connected");
})

 export {app}