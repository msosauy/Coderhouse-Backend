import express from "express";



const app = express();

app.use(expres)

app.get("/", (req,res) => {
});

app.get("/unParametro/:idUsuario", (req,res) => {s
});

app.get("/unParametro/:nombre", (req,res) => {
    res.send(`Bienvenido ${req.params.nombre}`)
});

app.get("/dosParametros/:nombre/:apellido", (req, res) => {
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)
});

app.listen(8080, () => {
    console.log("Server running port: 8080");
});