import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Esto es un servidor express")
})

app.get("/bienvenida", (req, res) => {
    res.send(`<h1>Bienvenidos a mi primer servidor</h1>`)
})

app.get("/usuarios", (req, res) => {
    const usuario = {
        nombre: "Manuel",
        apellido: "Sosa",
        edad: 39
    }
    
    res.send(usuario)
})

app.listen(8080, () => {
    console.log("Server running on port: localhost:8080")
})

