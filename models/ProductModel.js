class ProductModel {
  /**
   * Class constructor
   */
  constructor() {
    this.model = [];
  }

  /**
   * Create new product
   * @returns {Object} created product
   */
  create(data) {
    const newProduct = data;
    this.model.push(newProduct);

    return Promise.resolve(newProduct);
  }

  /**
   * Return all products
   * @returns {Object[]} products array
   */
  findAll() {
    const products = this.model;

    return Promise.resolve(products);
  }

  /**
   * Return single product
   * @param {Number} id Product's id
   * @returns
   */
  findOne(id) {
    const product = this.model.find(productObject => productObject.id === id);

    if (!product) {
      return Promise.reject(new Error('Product not found'));
    }
    return Promise.resolve(product);
  }

  /**
  * Delete product
  * @param {Number} id Product id to be deleted
  * @returns {Object} product Deleted product
  */
  delete(id) {
    const productToDelete = this.model.find(product => product.id === id);

    if (!productToDelete) {
      return Promise.reject(new Error('Unable to delete. Product not found'));
    }

    this.model = this.model.filter(product => product.id !== productToDelete);

    return Promise.resolve(productToDelete);
  }

  /**
   * Return all reviews for single product
   * @returns {Object[]} products
   */
  /* eslint-disable class-methods-use-this */
  findAllReviews(id) {
    const dummyMessage = `
      Get all reviews of single product with id = ${id}.
      Not implemented yet.
    `;

    return Promise.resolve(dummyMessage);
  }
  /* eslint-enable class-methods-use-this */
}

export default new ProductModel();
