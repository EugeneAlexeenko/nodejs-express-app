import express from 'express';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import ProductRoutes from './ProductRoutes';
import checkToken from '../../middlewares/checkToken';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/users', checkToken, UserRoutes);
router.use('/products', checkToken, ProductRoutes);

export default router;
