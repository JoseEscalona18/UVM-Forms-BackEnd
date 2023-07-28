const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-c');
const { verificarSesion } = require('../middlewares/auth');


// Ruta para obtener todos los usuarios (GET)
router.get('/', controller.obtenerUsuarios);

// Ruta para obtener un usuario por su id (GET)
router.get('/id/:id', controller.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su id (PUT)
router.put('/id/:id', controller.actualizarUsuarioPorId);

// Ruta para eliminar un usuario por su id (DELETE)
router.delete('/id/:id', controller.eliminarUsuarioPorId);

// Ruta para crear un usuario (POST)
router.post('/crear', controller.crearUsuario);

// Ruta para iniciar sesión (POST)
router.post('/login', controller.iniciarSesion);

router.get('/login', verificarSesion, (req, res) => {
  // Si el usuario está autenticado, redirigir al usuario a la página de inicio
  if (req.user) {
    res.redirect('/index');
  } else {
    // Si el usuario no está autenticado, mostrar la página de inicio de sesión
    res.render('login.ejs');
  }
});

// Ruta para mostrar el formulario de crear usuario (GET)

router.get('/crear',

(req, res) => {
  // Renderizar el archivo EJS
  res.render('register.ejs');
});

module.exports = router;