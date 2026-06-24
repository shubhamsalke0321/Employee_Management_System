const express = require("express");
const { registerUser } = require("../controller/main.controller");

const router = express.Router();

router.route("/register").post(registerUser);

module.exports = router;