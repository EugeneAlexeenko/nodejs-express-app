import jwt from 'jsonwebtoken';

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

  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        code: 401,
        message: 'Unauthorized request',
        data: 'Invalid token',
        error: err,
      });
    }

    req.user = decoded;

    return next();
  });
};

export default checkToken;
