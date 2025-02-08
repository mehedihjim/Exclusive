const { default: mongoose } = require("mongoose");
const chalk = require("chalk");

const databaseconnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log(chalk.yellow('Database Connected!'))
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = databaseconnect;