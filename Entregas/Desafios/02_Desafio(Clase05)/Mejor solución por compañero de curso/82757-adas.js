const fs = require('fs')

class ProductManager{

    constructor(filePath){
        this.path = filePath
        this.products = [];
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        //verificamos que se ingresen todos los datos.
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("ERROR: Datos del producto incompletos")
            return 
        }

        //definimos el objeto con los datos ingresados.
        const product = {
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        }

        //verificamos que no se ingrese un producto con un codigo existente.
        for( const item of this.products){
            if(item.code === product.code){
                console.error('ERROR: Codigo existente');
                return
            }
        }
        
        //Definimos un id para cada producto de forma ascendente, segun su posicion en la lista de productos. 
        if(this.products.length === 0){
            product.id = 1
        }else{
            product.id = this.products[this.products.length -1].id + 1;  //de esta forma accedemos al objeto que se encuentra al final del array y le sumamos 1, para que sea de codigo unico y ascendente segun su posicion. 
        }

        //En una sola linea seria asi(con operador ternario):
        //this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;

        this.products.push(product);

        //creamos el archivo en la ruta (path) y le pasamos el array de objetos products converido a json. 
        await fs.promises.writeFile(this.path,JSON.stringify(this.products,null,2)) // el segundo parametro de stringify es opcional asi que le pusimos null para salterarlo y el 3er parametro es el espacio de sangria. al pasarle un 2 estamos indicando que queremos que la cadena JSON tenga un nivel de sangría de 2 espacios.
    }

    getProducts = async () => {

        //Leemos el contenido del archivo almacenado en la ruta (path) y lo almacenamos en una variable.Luego con Json.Parse()lo convertimos a formato objeto para poder manipularlo.
        try{
            const productsList = await fs.promises.readFile(this.path,"utf-8")
            const productsListParse = JSON.parse(productsList)
            return productsListParse

        //en caso de que se genere un error debido a que no exista el archivo que se intenta leer debido a que todavia no se agrego ningun producto, devolvemos this.products, el cual seria un array vacio.
        }catch{
            return this.products;
        }
    }

    getProductById = async (searchId) => {

        //Almacenamos el contenido del archivo creado en una variable, el cual sera un array de objetos. con un for..of recorremos el arreglo hasta encontrar uno con el mismo id que se ingresa como parametro.
        const products = await this.getProducts()
        for(const item of products){
            if(item.id === searchId){
                return item;
            }
        }
        return 'Not found'
    }

    updateProduct = async (id, title, description, price, thumbnail, code, stock) => {

        //verificamos que se ingresen todos los datos. 
        if(!id || !title || !description || !price || !thumbnail || !code || !stock){
          console.error("ERROR: Datos del producto incompletos")
          return 
        }
        
        const currentProductsList = await this.getProducts()

        //verificamos que no se ingrese un producto con un codigo existente.
        for( const item of currentProductsList){
            if(item.code === code){
                console.error('ERROR: Codigo existente');
                return
            }
        }

        //otra forma:

        // const existingCode = currentProductsList.find(item =>item.code===code)
        // if(existingCode){
        //      console.error('ERROR: Codigo existente')
        //      return}
        
        //recorremos el array con objetos productos hasta encontrar uno con el id ingresado como parametro y se actualiza el objeto con los datos ingresados.
        let newProductsList = currentProductsList.map(item => {
            if (item.id === id) {
                const updatedProduct = {
                    ...item,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                };
                return updatedProduct;
            }     
            return item; // Devuelve el elemento original si no se ha actualizado
        });

        //sobreescribimos el archivo con el contenido actualizado.
        await fs.promises.writeFile(this.path,JSON.stringify(newProductsList,null,2))
    }
            

    deleteProduct = async (searchId) => {
        // Leemos el contenido del archivo y lo guardamos en una variable. El contenido es un array de objetos.
        const productsList = await this.getProducts();


        //verificamos que el codigo con el id pasado como parametro exista
        const existingCode = productsList.find(product =>product.id===searchId)
        if(!existingCode){
            console.error('ERROR: Codigo inexistente')
            return
        }

        //caso contrario, guardamos en una variable todos los demas obajetos que posea un nuemero de id distinto al que pasamos por parametro. Osea lo eliminamos.
        const updatedProductsList = productsList.filter(product => product.id !== searchId); 
        //sobreescribimos el archivo con la lista de productos actualizada
        await fs.promises.writeFile(this.path,JSON.stringify(updatedProductsList,null,2))
        console.log('Producto eliminado correctamente')
        return updatedProductsList;  
    }
}

//Test

const productManager = new ProductManager('products.json');
(async () => {

    //=========array vacio=================

    const noProducts = await productManager.getProducts();
    console.log('All Products:', noProducts);


    //===============metodo addProduct:===============

    await productManager.addProduct(
        'Monitor Asus',
        'Monitor led 24" 75hz',
        59.99,
        'path/to/image1.jpg',
        'PRD001',
        100
    );

    await productManager.addProduct(
        'Samsung Galaxy S23',
        'nuevo con caja sellada',
        800.50,
        'path/to/image2.jpg',
        'PRD002',
        15
    );

    await productManager.addProduct(
        'Monitor presonus eris 5',
        'Monitores de estudio',
        300.25,
        'path/to/image2.jpg',
        'PRD003',
        28
    );

    //============metodo getProducts:=============

    const allProducts = await productManager.getProducts();
    console.log('All Products:', allProducts);

    //==========metodo getProductByID:============

    const productById = await productManager.getProductById(2);
    console.log('Product with ID 1:', productById);

    //============metodo updateProduct:==============

    await productManager.updateProduct(
        3, 
        'Iphone 14 pro max',
        'Importado desde EE.UU',
        999.99,
        'algo',
        '1223456987',
        114,
    );

    const updatedProduct = await productManager.getProductById(3);
    console.log('Updated Product:', updatedProduct);

    // ==============metodo deleteproduct:===================

    await productManager.deleteProduct(2);
    const remainingProducts = await productManager.getProducts();
    console.log('Remaining Products:', remainingProducts);

})();
