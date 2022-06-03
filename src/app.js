require('dotenv').config();
const express = require('express');
const cors = require('cors');

// using express
const app = express();
const port = process.env.PORT || 3000

// path routes
const path = {
    buscar : '/api/buscar'
}

// routes
const buscarRoutes = require('./routes/buscar.routes');

// using routes
app.use(path.buscar, buscarRoutes);

// midlewares
app.use(cors());

app.listen(port, () => {
    console.log('Servidor on port', port);
})




