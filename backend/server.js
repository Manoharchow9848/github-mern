import express from 'express'
import dotenv from "dotenv";
import cors from 'cors';
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport/github.auth.js";

import { connectdb } from './db/connectdb.js';
import userRoutes from './routes/userRoutes.js';
import exploreRoute from './routes/exploreRoutes.js'
import authRoutes from './routes/authRoute.js'
const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoute);

const PORT=5000
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on http://localhost:${PORT}`);
    })
})
