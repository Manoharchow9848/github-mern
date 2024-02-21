import mongoose from "mongoose";

export const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log('Connected to Database');
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}