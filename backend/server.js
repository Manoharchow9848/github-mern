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
import { log } from 'console';
dotenv.config();
const app = express();
const __dirname = path.resolve();


app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoute);

const PORT=process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on http://localhost:${PORT}`);
    })
})
 