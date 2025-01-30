const express = require("express");

const InicioController = require ('../controllers/InicioController')

// const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

let ctrl = new InicioController();
// let auth = new AuthMiddleware();

router.get("/", ctrl.inicioView);
router.post("/", ctrl.inicio);

router.get('/:id', ctrl.excluir);

router.get('/editar/:id', ctrl.editarView);

module.exports = router;