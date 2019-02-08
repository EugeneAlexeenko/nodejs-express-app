import UserModel from '../models/UserModel';

class UserController {
  constructor() {
    this.model = UserModel;
  }

  create(req, res) {
    const newUser = req.body;

    this.model.create(newUser)
      .then((user) => {
        res.status(200).json(user);
      });
  }

  getAll(req, res) {
    this.model.findAll()
      .then((users) => {
        res.status(200).json(users);
      });
  }

  getOne(req, res) {
    const { id } = req.params;
    this.model.findOne(Number(id))
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(404).json({
          message: error.message,
        });
      });
  }
}

export default new UserController();
