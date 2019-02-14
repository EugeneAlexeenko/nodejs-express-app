import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
const checkToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({
      code: 401,
      message: 'Unauthorized request',
      data: 'Authorization header required',
    });
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      code: 401,
      message: 'Unauthorized request',
      data: 'Token required',
    });
  }

  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        code: 401,
        message: 'Unauthorized request',
        data: 'Invalid token',
        error: err,
      });
    }

    req.user = decoded;

    next();
  });
};

export default checkToken;
