import express from 'express'
import dotenv from "dotenv";
import cors from 'cors';
import { connectdb } from './db/connectdb.js';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import exploreRoute from './routes/exploreRoutes.js'
const app = express();

app.use(cors());

app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoute);

const PORT=5000
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on http://localhost:${PORT}`);
    })
})
