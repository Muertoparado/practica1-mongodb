import { ObjectId } from 'mongodb';
import { con } from '../db/atlas.js'; // Asegúrate de importar correctamente la conexión a la base de datos
import { limitGrt } from '../limit/congif.js';
import { Router } from 'express';
const appCampus = Router();

appCampus.post("/sautomovil", limitGrt(), async (req, res) => {
   if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
   }

   const { ID_sucursal, ID_automovil, Cantidad_disponible } = req.body;

   if (!ID_sucursal || !ID_automovil || !Cantidad_disponible) {
      return res.status(400).json({ message: 'Missing required properties in request body' });
   }

   if (con) {
      const db = con.db('testx'); // Obtén la instancia de la base de datos desde la conexión
      const collection = db.collection("sucursal_automovil");

      try {
         await collection.insertOne({ ID_sucursal, ID_automovil, Cantidad_disponible });
         return res.status(200).json({ message: 'Datos insertados correctamente' });
      } catch (error) {
         return res.status(500).json({ message: 'Error al insertar datos en la base de datos' });
      }
   } else {
      return res.status(500).json({ message: 'No se pudo establecer la conexión a la base de datos' });
   }
});


appCampus.post('/insert', function (req, res) {
   ObjectId.connect(con(), function(err, db) {
     if (err) {
       console.log("Error de conexión:", err);
       res.status(500).send("Error de conexión a la base de datos");
       return;
     }
     var dbo = db.db("testx");
     var myobj = req.body;
     dbo.collection("sucursal_automovil").insertOne(myobj)
     .then(result => {
       console.log("Documento insertado");
       res.send({ status: "success", message: "Documento insertado", document: result.ops[0] });
       db.close();
     })
     .catch(error => {
       console.log("Error al insertar documento:", error);
       res.status(500).send("Error al insertar documento");
     });
   });
 });
export default appCampus;
