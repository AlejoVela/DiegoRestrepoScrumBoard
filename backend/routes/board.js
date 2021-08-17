const BoardController = require("../controllers/board");
const router = require("express").Router();

router.post("/saveBoard", BoardController.saveBoard);

module.exports = router;