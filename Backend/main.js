const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
require('dotenv').config();
const URL = process.env.URL


// Crear una instancia de la aplicación de Express
const app = express();

// Configurar una ruta básica

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Especificar el puerto en el que el servidor escuchará

const PORT =  3000;

mongoose.connect(URL).then(()=> {
  console.log("Conexion a la BDD realizada con éxito")
  app.listen(PORT, () => {
      console.log("Servidor ejecutandose en http:localhost:", PORT);
  })
})