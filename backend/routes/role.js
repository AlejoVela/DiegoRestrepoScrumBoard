const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");

//Metodo post, enviar info
router.post("/registerRole", RoleController.registerRole);
//Metodo get, obtener info
router.get("/listRole", RoleController.listRole);

module.exports = router;
