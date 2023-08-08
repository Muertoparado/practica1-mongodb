import { ObjectId } from 'mongodb';
import { con }  from '../db/atlas.js';
import { limitGrt } from '../limit/config.js';
import {EsquemaSucursal_automovil} from '../middleware/sucursal_automovil.js'
import {Router} from 'express';
const appCampus= Router();


appCampus.post("/sautomovil", limitGrt(),EsquemaSucursal_automovil(),async(req, res)=>{
   if(con){
    db.collection("sucursal_automovil").insertOne([datos])
   }
});

export default appCampus;
