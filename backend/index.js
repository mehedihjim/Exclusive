const chalk = require("chalk");
const express = require("express");
require('dotenv').config();
const router = require("./router");
const databaseconnect = require("./config/config.database");
const app = express();
databaseconnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(chalk.blue('Server is Running...'));
})