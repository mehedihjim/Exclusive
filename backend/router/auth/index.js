const express = require("express");
const router = express.Router();

router.get("/auth", (req, res) => {
    res.send("get me auth")
})


module.exports = router