import { Router } from "express";
import ProductManager from "./../ProductManager.js";

const router = Router();
const productManager = new ProductManager("./products.json");

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  let limit = req.query.limit;

  try {
    const products = await productManager.getProducts();

    if (!limit) {
      res.send(products);
      return;
    }

    if (isNaN(limit)) {
      return res
        .status(400)
        .send({ status: "erorr", error: "limit debe ser un numero" });
    }

    const productsLimited = products.slice(0, limit);
    return res.send(productsLimited);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:pid", async (req, res) => {
  const searchId = +req.params.pid;

  if (isNaN(searchId)) {
    return res
      .status(400)
      .send({ status: "error", error: "searchId debe ser un numero" });
  }

  const products = await productManager.getProducts();

  if (searchId) {
    const productById = products.find((el) => el.id === searchId);
    if (!productById) {
      return res
        .status(400)
        .send({ status: "error", error: "El producto no existe" });
    }
    return res.send(productById);
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    description,
    price,
    thumbnails,
    stock,
    status,
    category,
    code,
  } = req.body;

  //Chequeamos que no falten datos requeridos
  if (
    !title ||
    !description ||
    !code ||
    !price ||
    !status ||
    !stock ||
    !category
  ) {
    return res
      .status(400)
      .send({ status: "error", error: "Faltan datos obligatorios" });
  }

  //Chequeamos que title, description, code, category sean un STRING
  if (
    title != "string" ||
    description != "string" ||
    code != "string" ||
    category != "string"
  ) {
    return res.status(400).send({
      status: "error",
      error: "Revisa los tipos de valores que estas enviando",
    });
  }

  //Chequeamos que price y stock sean un número
  if (isNaN(price) || isNaN(stock)) {
    return res.status(400).send({
      status: "error",
      error: "price y stock deben ser un NUMBER",
    });
  }
  //Chequeamos que price y stock sean un número
  if (typeof price === "string" || typeof stock === "string") {
    return res.status(400).send({
      status: "error",
      error: "price y stock no pueden ser un STRING",
    });
  }

  try {
    await productManager.addProduct(
      title,
      description,
      price,
      thumbnails,
      stock,
      status,
      category,
      code
    );

    return res
      .status(200)
      .send({ status: "success", success: "Producto agregado correctamente" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ status: "error", error: "No se pudo agregar el producto" });
  }
});

router.put("/:pid", async (req, res) => {
  const {
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  } = req.body;

  if (
    !title ||
    !description ||
    !price ||
    !status ||
    !thumbnails ||
    !code ||
    !stock ||
    !category
  ) {
    return res
      .status(400)
      .send({ status: "error", error: "Faltan datos obligatorios" });
  }

  const productToUpdate = { id: +req.params.pid, ...req.body };

  try {
    await productManager.updateProduct(productToUpdate);
    return res
      .status(200)
      .send({ status: "error", error: "Producto actualizado correctamente" });
  } catch (err) {
    console.log("PUT" + err);
    return res
      .status(400)
      .send({ status: "error", error: "No se pudo actualizar el producto" });
  }
});

router.delete("/:pid", async (req, res) => {
  const pid = +req.params.pid;

  try {
    await productManager.deleteProduct(pid);
    return res.status(200).send({status: "success", success: "Producto eliminado correctamente"})
  } catch (error) {
    return res.status(400).send({status: "error", error: "No se pudo eliminar el producto o no existe"})
  }
});

export default router;
