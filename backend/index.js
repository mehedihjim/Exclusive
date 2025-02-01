const chalk = require("chalk")
const express = require("express")
const app = express()
require('dotenv').config()

app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log(chalk.blue('Server is Running...'))
})