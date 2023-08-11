import { Router } from "express";
import ProductManager from "./../ProductManager.js";

const router = Router();
const productManager = new ProductManager("src/products.json");

router.use((req, res, next) => {
  next();
});

//ROOT & QUERY
router.get("/", async (req, res) => {
  let limit = req.query.limit;

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
});

//PARAMS
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
  //   const newProduct = req.body;
  console.log(req.body);

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

  //Chequeamos que
  if (
    typeof title != "string" ||
    typeof description != "string" ||
    typeof code != "string" ||
    typeof isNaN(price) ||
    typeof status != "boolean" ||
    typeof isNaN(stock) ||
    typeof category != "string"
  ) {
    return res
      .status(400)
      .send({
        status: "error",
        error: "Parece que algunos datos no están en un formato admitido",
      });
  }

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

  // productManager.addProduct(newProduct);
});

export default router;
