import express from "express";
import productsRouter from "./routes/products.js";
// import productsCarts from "./routes/carts.js"

const app = express();

app.use(express.json());

app.use("/api/products", productsRouter)
// app.use("/api/carts", productsCarts)

const server = app.listen(8080, () => {
    console.log("Server running on port 8080");
});