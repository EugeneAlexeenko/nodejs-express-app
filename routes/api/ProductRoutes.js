import express from 'express';
import ProductController from '../../controllers/ProductController';

const router = express.Router();

// TODO: Add validators
router.post('/', ProductController.create.bind(ProductController));
router.get('/', ProductController.getAll.bind(ProductController));
router.get('/:id', ProductController.getOne.bind(ProductController));
router.get('/:id/reviews', ProductController.getAllReviewsByProductId.bind(ProductController));

export default router;
