const BoardController = require("../controllers/board");
const router = require("express").Router();
const Auth = require("../middlewares/auth");
const ValidateUser = require("../middlewares/validateUser");

router.post("/saveBoard", Auth, ValidateUser, BoardController.saveBoard);

module.exports = router;