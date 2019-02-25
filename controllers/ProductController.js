import db from '../models/db';
import logger from '../config/logger';

class ProductController {
  constructor() {
    this.model = db.Product;
    this.reviewModel = db.Review;
  }

  async create(req, res) {
    const newProduct = req.body;

    try {
      await this.model.create(newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }

  async getAll(req, res) {
    try {
      const products = await this.model.findAll();
      res.status(200).json(products);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const product = await this.model.findById(id);

      if (!product) {
        res.status(404).json({
          message: 'Product has not been found',
        });
      }

      res.status(200).json(product);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }

  async getAllReviewsByProductId(req, res) {
    const { id } = req.params;

    try {
      const reviews = await this.reviewModel.findAll({
        where: {
          productId: id,
        },
      });

      res.status(200).json(reviews);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }
}

export default new ProductController();
