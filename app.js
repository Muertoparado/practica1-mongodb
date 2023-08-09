import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import appCampus from './routes/PostTablas.js';

dotenv.config();
const app=express();
app.use(bodyParser.json());
app.use("/alquiler",appCampus)


const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})