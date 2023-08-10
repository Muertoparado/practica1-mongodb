import { ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';
import { limitGrt } from '../limit/congif_sucursal_auto.js';
import { Router } from 'express';
import { limitSucursal } from '../limit/config_sucursal.js';
import { limitAutomovil } from '../limit/config_autmovil.js';
import {limitReserva} from '../limit/config_reserva.js' 
import { limitCliente } from '../limit/config_cliente.js';
const appCampus = Router();


appCampus.post('/sautomovil', limitGrt(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }
   if(!req.rateLimit) return;

   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

      const collection = client.collection("sucursal_automovil");
      const myobj = req.body;
      const result = await collection.insertOne(myobj);
      console.log("Documento insertado");
      console.log(req.rateLimit);;
      return res.json({
         status: "success",
         message: "Documento insertado",
         document: result.ops 
      });
      
      
   } catch (error) {
      console.log("Error al insertar documento:", error);
      return res.status(500).json({ message: 'Error al insertar documento' });
   }
});

appCampus.post('/sucursal', limitSucursal(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }
   if(!req.rateLimit) return;

   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

      const collection = client.collection("sucursal");
      const myobj = req.body;
      const result = await collection.insertOne(myobj);
      console.log("Documento insertado");
      console.log(req.rateLimit);;
      return res.json({
         status: "success",
         message: "Documento insertado",
         document: result.ops 
      });
      
      
   } catch (error) {
      console.log("Error al insertar documento:", error);
      return res.status(500).json({ message: 'Error al insertar documento' });
   }
});

appCampus.post('/automovil', limitAutomovil(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }
   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

      const collection = client.collection("automovil");
      const myobj = req.body;
      const result = await collection.insertOne(myobj);
      console.log("Documento insertado");
      console.log(req.rateLimit);;
      return res.json({
         status: "success",
         message: "Documento insertado",
         document: result.ops 
      });
      
      
   } catch (error) {
      console.log("Error al insertar documento:", error);
      return res.status(500).json({ message: 'Error al insertar documento' });
   }
   
});

appCampus.post('/reserva', limitReserva(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }
   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

      const collection = client.collection("reserva");
      const myobj = req.body;
      const result = await collection.insertOne(myobj);
      console.log("Documento insertado");
      console.log(req.rateLimit);;
      return res.json({
         status: "success",
         message: "Documento insertado",
         document: result.ops 
      });
      
      
   } catch (error) {
      console.log("Error al insertar documento:", error);
      return res.status(500).json({ message: 'Error al insertar documento' });
   }
   
});

appCampus.post('/cliente', limitCliente(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }
   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

      const collection = client.collection("cliente");
      const myobj = req.body;
      const result = await collection.insertOne(myobj);
      console.log("Documento insertado");
      console.log(req.rateLimit);;
      return res.json({
         status: "success",
         message: "Documento insertado",
         document: result.ops 
      });
      
      
   } catch (error) {
      console.log("Error al insertar documento:", error);
      return res.status(500).json({ message: 'Error al insertar documento' });
   }
   
});



export default appCampus;
