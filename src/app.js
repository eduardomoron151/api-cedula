require('dotenv').config();
const express = require('express');
const cors = require('cors');

// using express
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin : '*'
}

// path routes
const path = {
    buscar : '/api/buscar'
}

// routes
const buscarRoutes = require('./routes/buscar.routes');

// midlewares
app.use(cors(corsOptions));

// using routes
app.use(path.buscar, buscarRoutes);



app.listen(port, () => {
    console.log('Servidor on port', port);
})




