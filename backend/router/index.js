const express = require("express");
const router = express.Router();
const api = require("./api");

const baseurl = process.env.BASE_URL;

router.use(baseurl, api);

// console.log("Base URL:", baseurl);

module.exports = router;