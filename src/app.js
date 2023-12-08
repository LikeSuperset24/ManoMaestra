const express = require('express');
const app = express();
const puerto = 80;

const TipoUsuarioController = require('./controllers/TipoUsuarioController'); 
const UsuarioController = require('./controllers/UsuarioController');
const TrabajosController = require('./controllers/TrabajosController');
const ReseñasController = require('./controllers/ReseñasController');
const IdeaProyectoController = require('./controllers/IdeaProyectoController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Bienvenido a Mano Maestra - Por Juan Pablo Seja Reyes!');
});

app.get('/tipo-usuarios', TipoUsuarioController.indexGet);
app.get('/tipo-usuarios/:id([0-9]+)', TipoUsuarioController.itemGet);

app.get('/usuarios', UsuarioController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuarios', UsuarioController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuarioController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuarioController.itemPatch);

app.get('/trabajos', TrabajosController.indexGet);
app.get('/trabajos/:id([0-9]+)', TrabajosController.itemGet);
app.post('/trabajos', TrabajosController.indexPost);
app.put('/trabajos/:id([0-9]+)', TrabajosController.itemPut);
app.patch('/trabajos/:id([0-9]+)', TrabajosController.itemPatch);

app.get('/resenas', ReseñasController.indexGet);
app.get('/resenas/:id([0-9]+)', ReseñasController.itemGet);
app.post('/resenas', ReseñasController.indexPost);
app.put('/resenas/:id([0-9]+)', ReseñasController.itemPut);
app.patch('/resenas/:id([0-9]+)', ReseñasController.itemPatch);

app.get('/ideas-proyectos', IdeaProyectoController.indexGet);
app.get('/ideas-proyectos/:id([0-9]+)', IdeaProyectoController.itemGet);
app.post('/ideas-proyectos', IdeaProyectoController.indexPost);
app.put('/ideas-proyectos/:id([0-9]+)', IdeaProyectoController.itemPut);
app.patch('/ideas-proyectos/:id([0-9]+)', IdeaProyectoController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});