const express = require("express");
const { regController, loginController } = require("../../controllers/authController");
const router = express.Router();

router.post('/registration', regController)

router.post('/login', loginController)

module.exports = router;