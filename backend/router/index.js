const express = require("express")
const router = express.Router()
const auth = require("./auth")

const baseurl = process.env.BASE_URL;

router.use(baseurl, auth);

// console.log(baseurl, auth)

module.exports = router