import { Router } from "express";
import CartManager from "./../CartManager.js";

const router = Router();
const cartManager = new CartManager("./carts.json");

router.use((req, res, next) => {
  next();
});

router.get("/:cid", async (req, res) => {
  const cid = +req.params.cid;
  try {
    const searchProducts = await cartManager.getProductsFromCartId(cid);
    res.status(200).send(searchProducts);
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "error", error: "El carrito no existe" });
  }
});

//Crea un nuevo carrito con ID autogenerado
router.post("/", async (req, res) => {
  try {
    await cartManager.newCart();
    res.status(200).send({
      status: "success",
      success: "Nuevo carrito creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ status: "error", error: "No se pudo crear el nuevo carrito" });
  }
});

router.post("/:cid/product/:pid", async (req, res) => {
  const searchCid = +req.params.cid;
  const searchPid = +req.params.pid;

  try {
    await cartManager.addProductToCart(searchCid, searchPid);
    const result = await cartManager.getCarts();
    res.status(200).send({status: "success", success: "Producto agregado correctamente", carts: result});
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({
        status: "error",
        error: "No se pudo crear o agregar el producto",
      });
  }
});

export default router;
