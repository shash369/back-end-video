import mongoose from "mongoose";
import { DB_NAME } from "../constants.js ";


const connectDB=async ()=>{
    try {
       const ConnectioInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongo conneted at ${ConnectioInstance.connection.host}`);
    } catch (error) {
        console.log("Connection error" ,error);
        process.exit(1);
    }
}

export default connectDB
