class ProductManager {
    products;

    constructor() {
        this.products = [];
    }

    async getProducts() {
        return this.products;
    }

    async addProduct(product) {
        this.products.push(product);
    }
}

export default ProductManager;