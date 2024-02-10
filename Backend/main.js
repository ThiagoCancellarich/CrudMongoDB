const express = require('express');

// Crear una instancia de la aplicación de Express
const app = express();

// Configurar una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Especificar el puerto en el que el servidor escuchará
const PORT =  3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});