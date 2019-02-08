import ProductModel from '../models/ProductModel';

class ProductController {
  constructor() {
    this.model = ProductModel;
  }

  create(req, res) {
    const newProduct = req.body;

    this.model.create(newProduct)
      .then((product) => {
        res.status(200).send(product);
      });
  }

  getAll(req, res) {
    this.model.findAll()
      .then((products) => {
        res.status(200).send(products);
      });
  }

  getOne(req, res) {
    const { id } = req.params;

    this.model.findOne(id)
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((error) => {
        res.status(404).json({
          message: error.message,
        });
      });
  }

  getAllReviewsById(req, res) {
    const { id } = req.params;
    this.model.findAllReviews(id)
      .then((result) => {
        res.status(200).send(result);
      });
  }
}

export default new ProductController();
