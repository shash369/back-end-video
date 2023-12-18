
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
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
