const express = require("express")

const aplicacion = express()

aplicacion.get("/prueba/express", (req, res) => {
    res.send("Hola, estas en la web prueba")
})

aplicacion.listen(3000);