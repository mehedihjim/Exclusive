function regController(req, res) {
    res.send("Registration")
}

function loginController(req, res) {
    res.send("Login")
}

module.exports = { regController, loginController }