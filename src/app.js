const express = require('express');
const app = express();
const puerto = 80;

const TemasController = require('./controllers/TemasController');
const TipoUsuarioController = require('./controllers/TipoUsuarioController'); 
const UsuarioController = require('./controllers/UsuarioController');
const TrabajosController = require('./controllers/TrabajosController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba!');
});

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);
app.post('/temas', TemasController.indexPost);
app.put('/temas/:id([0-9]+)', TemasController.itemPut);
app.patch('/temas/:id([0-9]+)', TemasController.itemPatch);

app.get('/tipoUsuario', TipoUsuarioController.indexGet);
app.get('/tipoUsuario/:id([0-9]+)', TipoUsuarioController.itemGet);

app.get('/usuario', UsuarioController.indexGet);
app.get('/usuario/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuario', UsuarioController.indexPost);
app.put('/usuario/:id([0-9]+)', UsuarioController.itemPut);
app.patch('/usuario/:id([0-9]+)', UsuarioController.itemPatch);

app.get('/trabajos', TrabajosController.indexGet);
app.get('/trabajos/:id([0-9]+)', TrabajosController.itemGet);
app.post('/trabajos', TrabajosController.indexPost);
app.put('/trabajos/:id([0-9]+)', TrabajosController.itemPut);
app.patch('/trabajos/:id([0-9]+)', TrabajosController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});