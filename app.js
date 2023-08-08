import dotenv from 'dotenv';
import express from 'express';
import appCampus from './routes/campus.js';

dotenv.config();
const app=express();
app.use("/alquiler",appCampus)


const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})