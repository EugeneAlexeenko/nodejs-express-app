import express from 'express';
import ProductController from '../../controllers/ProductController';

const router = express.Router();

router.post('/', ProductController.create.bind(ProductController));
router.get('/', ProductController.getAll.bind(ProductController));
router.get('/:id', ProductController.getOne.bind(ProductController));
router.get('/:id/reviews', ProductController.getAllReviewsById.bind(ProductController));

export default router;
