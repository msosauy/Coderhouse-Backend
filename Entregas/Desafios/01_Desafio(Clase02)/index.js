// Al intentar crear un nuevo producto:
// 1- Chequea que todos los datos necesarios hayan sido ingresados, si no es así, devuelve un ERROR por consola.
// 2- Si los datos fueron enviados correctamente, genera un CODE aleatorio y chequea que no exista
// 3- Genera un ID incrementando en 1 el número del ID existente con el valor más alto. 
// 4- Hace un PUSH del nuevo producto al elemento products.

// Al llamar a la función getProducts() se realiza un LOG por consola de todos los products existentes

// Al llamar a la función getProductsById() se realiza un LOG por consola del OBJETO correspondiente al ID ingresado en la búsqueda.

class ProductManager {
  constructor() {
    this.products = [];
  }

  generateCode = () => {
    let newCode = Math.floor(Math.random() * 10000);

    for (let i = 0; i < this.products.length; i++) {
      const el = this.products[i];
      if (newCode === el.code) {
        newCode = Math.floor(Math.random() * 10000);
        i = 0;
      }
    }
    return newCode;
  };

  addProduct = (title, description, price, thumbnail, stock) => {
    if (!title || !description || !price || !thumbnail || !stock) {
      console.error("Faltan algunos datos!!");
    } else {
      const product = {
        title,
        description,
        price,
        thumbnail,
        stock,
        code: this.generateCode(),
      };

      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(product);
    }
  };

  getProducts = () => {
    console.log(this.products);
  };

  getProductsById = (id) => {
    const foundId = this.products.findIndex((el) => el.id === id);
    if (foundId === -1) {
      console.error("Not found");
    }else{
      console.log("ID encontrado: ", this.products[foundId]);
    }
  };
}

const productHandler = new ProductManager();
productHandler.addProduct("router", "SOHO", 120, "r1_img.png", 5);
productHandler.addProduct("router", "Empresarial", 100, "r2_img.png", 2);
productHandler.addProduct("access-point", "Enterprise", 250, "ap_img.png", 10);
productHandler.getProducts();
productHandler.getProductsById(10);


