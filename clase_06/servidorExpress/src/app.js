import { express } from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Servidor ")
})

app.get("/saludo", (req, res) => {
    res.send("Bienvenido")
})

app.get("/login", (req,res) =>{
    res.send("login")
})

app.listen(8080, () => {
    console.log("Server running port: 8080");
});