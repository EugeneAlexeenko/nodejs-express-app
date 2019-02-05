/**
 * Middleware for parsing cookies.
 *
 * Parses cookie header and adds parsed cookie
 * to request stream object as ​parsedCookies​ field.
 */

const cookieParser = (req, res, next) => {
  const cookiesString = req.headers.cookie;
  const cookiePairs = cookiesString.split(';');
  const parsedCookies = {};

  cookiePairs.forEach((pair) => {
    const key = pair.split('=')[0];
    const value = pair.split('=')[1];

    parsedCookies[key] = value;
  });

  req.parsedCookies = parsedCookies;

  next();
};

export default cookieParser;
