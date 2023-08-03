//AGREGAR , CONSULTAR, MODIFICAR, ELIMINAR producto en archivo persistente

// Al intentar crear un nuevo producto "addProduct()":
//   1- Chequea que todos los datos necesarios hayan sido ingresados, si no es así, devuelve un ERROR por consola.
//   2- Si los datos fueron enviados correctamente, genera un CODE aleatorio y chequea que no exista.
//   3- Genera un ID incrementando en 1 el número del ID existente con el valor más alto.
//   4- Guarda el nuevo producto junto a los anteriores (si existen) en un archivo de forma persistente .

// Al llamar a la función getProducts() se realiza un RETURN en fomra de ARRAY de todos los products existentes

// Al llamar a la función getProductsById() se realiza un LOG por consola del OBJETO correspondiente al ID ingresado en la búsqueda, si no existe se imprime un ERROR por consola.

// La función "updateProduct()" recibe 3 parametros del producto a editar= ID(number) , key(string) , value(string or number). Esta función solo edita el parametro (key: value) indicado.

// La función "deleteProduct()" recibe el ID del producto que se desea eliminar.

// Nota: al pie de este archivo dejo un array con varios productos y el llamado a las funciones para realizar pruebas.

const fs = require("fs");
const { log } = require("util");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "products.txt";
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
      return productsList[foundId];
    }
  };

  //Busca el producto por ID y lo elimina
  removeProductById = (id) => {
    const actualProducts = this.getProducts();
    const filteredProducts = actualProducts.filter((el) => el.id != id);
    fs.unlinkSync(this.path);
    fs.writeFileSync(this.path, JSON.stringify(filteredProducts));
  };

  //Recibe 3 parametros del producto a editar= ID , key , value
  editProductsById = (id, key, value) => {
    const foundId = this.getProductsById(id);
    foundId[key] = value
    const actualProducts = this.getProducts();
    const filteredProducts = actualProducts.filter((el) => el.id != id)
    const newProductsList = [];
    newProductsList.push(...filteredProducts, foundId)
    fs.unlinkSync(this.path)
    fs.writeFileSync(this.path, JSON.stringify(newProductsList))
  }
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
// productHandler.removeProductById(4);
// productHandler.editProductsById(1, "stock", 100);
console.log(productHandler.getProducts());


// [
//   {"title": "router", "description": "SOHO", "price": 120, "tumbnail": "r1_img.png", "stock": 5, "id": 1, "code": 4685},
//   {"title": "router", "description": "Empresarial", "price": 100, "thumbnail": "r2_img.png", "stock": 2, "id": 2, "code": 1468},
//   {"title": "access-point", "description": "Enterprise", "price": 250, "thumbnail": "ap_img.png","stock": 10, "id": 3, "code": 6842}
// ]