import express from "express";

const app = express();

const usuario = [
    {
        id: 1,
        nombre: "Manuel",
        apellido: "Sosa",
        edad: 39
    },
    {
        id: 2,
        nombre: "Salvador",
        apellido: "Sosa",
        edad: 8
    }
]

app.get("/", (req,res) => {
    res.send(usuarios)
})

app.get("/unParametro/:idUsuario", (req,res) => {
    const idUsuario = +req.params.idUsuario;
    let usuario = usuarios.find(usuario => usuario.id === idUsuario );

    if(usuario) {
        res.send(`No existe el usuario`)
    }

})

app.get("/unParametro/:nombre", (req,res) => {
    res.send(`Bienvenido ${req.params.nombre}`)
})

app.get("/dosParametros/:nombre/:apellido", (req, res) => {
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)
})

app.listen(8080, () => {
    console.log("Server running port: 8080");
});