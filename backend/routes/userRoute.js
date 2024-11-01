const { createUser, login } = require("../controllers/userController");


const express = require("express")
const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(login)
module.exports = router;