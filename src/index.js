// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{//is giving error due to port is alredy in use
        console.log(`server is listinnig at port : ${process.env.PORT}`); 
    } )
})
.catch((err)=>{
    console.log("MONGO connection error" ,err);
})

/*
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const app=express();
const port=process.env.PORT
const uri=process.env.MONGODB_URI
;(async()=>{
    try {
      await  mongoose.connect(`${uri}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("ERR:" ,error);
       }) 

       app.listen(port,()=>{
        console.log('connected');
        console.log(`App is listening on port ${port}`);
       })
    } catch (error) {
        console.log("error:",error);
    }
})()
*/
