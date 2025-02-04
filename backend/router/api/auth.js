const express = require("express");
const router = express.Router();

router.post('/registration', (req, res) => {
    res.send("Registration")
})

router.post('/login', (req, res) => {
    res.send("Login")
})

module.exports = router;