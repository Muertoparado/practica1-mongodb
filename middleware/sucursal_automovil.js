let EsquemaSucursal_automovil =
{
   $jsonSchema: {
      required: [ "ID_sucursal", "ID_automovil", "Cantidad_disponible" ],
      properties: {
        ID_sucursal: { bsonType: "int" },
        ID_automovil: { bsonType: "int" },
        Cantidad_disponible: { bsonType: "int" },
          instock: false
      }
   }
}

export default EsquemaSucursal_automovil;