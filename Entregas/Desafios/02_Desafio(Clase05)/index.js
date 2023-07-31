// Al intentar crear un nuevo producto:
// 1- Chequea que todos los datos necesarios hayan sido ingresados, si no es así, devuelve un ERROR por consola.
// 2- Si los datos fueron enviados correctamente, genera un CODE aleatorio y chequea que no exista
// 3- Genera un ID incrementando en 1 el número del ID existente con el valor más alto.
// 4- Hace un PUSH del nuevo producto al elemento products.

// Al llamar a la función getProducts() se realiza un LOG por consola de todos los products existentes

// Al llamar a la función getProductsById() se realiza un LOG por consola del OBJETO correspondiente al ID ingresado en la búsqueda.

//AGREGAR , CONSULTAR, MODIFICAR, ELIMINAR producto en archivo persistente

//updateProduct(id, textToUpdate) {persist ID}, deleteProduct(id)

const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "files/products.txt";
  }

  //Lee productos de archivo local y devuelve un ARRAY. Si no existen productos en la BBDD returna console LOG
  getProducts = () => {
    const productsList = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    if (!productsList) {
      console.error("No existen productos en la BBDD"); 
    }else {
      return productsList
    }
    
  };

  //Genera un CODE aleatorio y cheuqea que ya no exista
  generateCode = (productsList) => {
    //Si existe objetos realiza la comparación para asegurar que el codigo no exista
    if (productsList) {
      let newCode = Math.floor(Math.random() * 10000);

      for (let i = 0; i < productsList.length; i++) {
        const el = productsList[i];
        if (newCode === el.code) {
          newCode = Math.floor(Math.random() * 10000);
          i = 0;
        }
      }
      return newCode;
    }
    return Math.floor(Math.random() * 10000);
  };

  //Busca el ID mas alto existente y lo incrementa en 1. Garantiza que no se repitan los IDs
  generateId = (productsList) => {
    if (productsList) {
      const higherId = [];

      for (let i = 0; i < productsList.length; i++) {
        const el = productsList[i];
        higherId.push(el.id);
      }

      higherId.sort((a, b) => b - a);
      return higherId[0] + 1;
    }
    return 1
  };

  //Agrega un nuevo producto
  addProduct = (objNewProd) => {
    const { title, description, price, thumbnail, stock } = objNewProd;

    //Valida que todos los datos requeridos lleguen correctamente
    if (!title || !description || !price || !thumbnail || !stock) {
      return console.error("Faltan datos!!");
    }

    const productsList = this.getProducts();

    objNewProd.id = this.generateId(productsList);
    objNewProd.code = this.generateCode(productsList);

    productsList
      ? this.products.push(...productsList, objNewProd)
      : this.products.push(objNewProd);

    fs.writeFileSync(this.path, JSON.stringify(this.products));

    this.products = [];
  };

  //Busca un producto por ID y devuelve un OBJETO
  getProductsById = (id) => {
    const productsList = this.getProducts();

    const foundId = productsList.findIndex((el) => el.id === id);

    if (foundId === -1) {
      console.error("Not found");
    } else {
      console.log("ID encontrado: ", productsList[foundId]);
    }
  };

  //Busca el producto por ID y lo elimina
  removeProductById = (id) => {
    const actualProducts = this.getProducts();
    const filteredProducts = actualProducts.filter((el) => el.id != id);
    fs.unlinkSync(this.path);
    fs.writeFileSync(this.path, JSON.stringify(filteredProducts));
  };
}

///////EXECUTE

const productHandler = new ProductManager();
const prodToAdd = {
  title: "access-point",
  description: "SOHO",
  price: 60,
  thumbnail: "ap2_img.png",
  stock: 15,
};

// productHandler.addProduct(prodToAdd);
// productHandler.getProductsById(2);
// console.log(JSON.parse(productHandler.getProducts()));
// productHandler.removeProductById(4);
console.log(productHandler.getProducts());
