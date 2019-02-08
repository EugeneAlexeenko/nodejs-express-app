import express from 'express';
import UserController from '../../controllers/UserController';

const router = express.Router();

router.post('/', UserController.create.bind(UserController));
router.get('/', UserController.getAll.bind(UserController));
router.get('/:id', UserController.getOne.bind(UserController));

export default router;
