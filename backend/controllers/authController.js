function regController(req, res) {
    res.send(req.body)
}

function loginController(req, res) {
    res.send("Login")
}

module.exports = { regController, loginController }