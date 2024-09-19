'use strict';


const express = require('express');
const cors = require('cors');

const { db } = require('./database/config');

const app = express();

app.use(cors());


//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//Rutas
app.use('/encyclopedia/info',async (req, res) => {
    res.send("Testing!")
});
app.use('/testing', async (req, res) => {
    res.send("Testing!")
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});


module.exports = app;
