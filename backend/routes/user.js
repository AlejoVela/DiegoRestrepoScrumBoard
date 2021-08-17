const UserController = require("../controllers/user");
const router = require("express").Router();
const Auth = require("../middlewares/auth");
const ValidateUser = require("../middlewares/validateUser");

router.post("/registerUser", UserController.registerUser);
router.get("/listUser/:name?", Auth, ValidateUser, UserController.listUser);

module.exports = router;