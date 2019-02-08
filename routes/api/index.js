import express from 'express';
import UserRoutes from './UserRoutes';
import ProductRoutes from './ProductRoutes';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/products', ProductRoutes);

export default router;
