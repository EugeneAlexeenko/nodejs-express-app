import jwt from 'jsonwebtoken';
import db from '../models/db';

const signIn = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      code: 400,
      message: 'Bad request',
      data: 'Email or password not specified',
    });
  }

  return db.User.findOne({
    where: { email },
  })
    .then((user) => {
      if (!user || user.password !== password) {
        return res.status(401).json({
          code: 401,
          message: 'Unauthorized',
          data: 'Wrong email/password combination',
        });
      }

      const payload = {
        sub: user.id,
        email: user.email,
        username: user.username,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

      return res.status(200).json({
        code: 200,
        message: 'Ok',
        data: {
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
          },
        },
        token,
      });
    })
    .catch((error) => {
      res.status(500).json({
        code: 500,
        message: 'Server Error',
        data: error,
      });
    });
};

const signInLocalStrategy = (req, res) => {
  const { user } = req;

  const payload = {
    sub: user.id,
    name: user.userName,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

  res.json({
    code: 200,
    message: 'Ok',
    data: {
      user: {
        id: user.id,
        name: user.userName,
        email: user.email,
      },
    },
    token,
  });
};

const signInGoogleStrategy = (req, res) => {
  const { user } = req;

  const payload = {
    sub: user.id,
    name: user.displayName,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

  res.json({
    code: 200,
    message: 'Ok',
    data: {
      user: {
        id: user.id,
        name: user.displayName,
      },
    },
    token,
  });
};

const signInFacebookStrategy = (req, res) => {
  const { user } = req;

  const payload = {
    sub: user.id,
    name: user.displayName,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

  res.json({
    code: 200,
    message: 'Ok',
    data: {
      user: {
        id: user.id,
        name: user.displayName,
      },
    },
    token,
  });
};

const signInGithubStrategy = (req, res) => {
  const { user } = req;

  const payload = {
    sub: user.id,
    name: user.displayName,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 300 });

  res.json({
    code: 200,
    message: 'Ok',
    data: {
      user: {
        id: user.id,
        name: user.displayName,
      },
    },
    token,
  });
};

export default {
  signIn,
  signInLocalStrategy,
  signInGoogleStrategy,
  signInFacebookStrategy,
  signInGithubStrategy,
};
