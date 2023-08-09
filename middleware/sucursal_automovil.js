db.createCollection("sucursal_automovil", {
   validator: {
     $jsonSchema: {
       bsonType: "object",
       required: ["ID_sucursal", "ID_automovil", "Cantidad_disponible"],
       properties: {
         ID_sucursal: {
           bsonType: "string",
           description: "Debe ser una cadena de texto"
         },
         ID_automovil: {
           bsonType: "string",
           description: "Debe ser una cadena de texto"
         },
         Cantidad_disponible: {
           bsonType: "int",
           minimum: 1,
           description: "Debe ser un número entero mayor que cero"
         }
       }
     }
   }
 });
 