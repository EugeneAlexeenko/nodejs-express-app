import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';

const signIn = (req, res) => { // eslint-disable-line
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      code: 400,
      message: 'Bad request',
      data: 'Email or password not specified',
    });
  }

  UserModel.findOne(email)
    .then((user) => {
      if (!user || user.password !== password) {
        return res.status(401).json({
          code: 401,
          message: 'Unauthorized',
          data: 'Wrong email/password combination',
        });
      }

      const payload = {
        email: user.email,
        username: user.username,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

      return res.status(200).json({
        code: 200,
        message: 'Ok',
        data: {
          user: {
            email: user.email,
            username: user.username,
          },
        },
        token,
      });
    });
};

export default {
  signIn,
};
