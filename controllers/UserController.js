import db from '../models/db';
import logger from '../config/logger';

class UserController {
  constructor() {
    this.model = db.User;
  }

  async create(req, res) {
    const newUser = req.body;

    try {
      await this.model.create(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.model.findAll();
      res.status(200).json(users);
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
      const user = await this.model.findById(id);

      if (!user) {
        res.status(404).json({
          message: 'No user found',
        });
      }

      res.status(200).json(user);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({
        message: 'Server error',
      });
    }
  }
}

export default new UserController();
