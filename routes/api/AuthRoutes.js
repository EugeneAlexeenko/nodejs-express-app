import express from 'express';
import AuthController from '../../controllers/AuthController';

const router = express.Router();

router.post('/', AuthController.signIn);

export default router;
