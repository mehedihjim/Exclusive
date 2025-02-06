const chalk = require("chalk");
const express = require("express");
require('dotenv').config();
const router = require("./router");
const app = express();

app.use(router)

app.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(chalk.blue('Server is Running...'));
})