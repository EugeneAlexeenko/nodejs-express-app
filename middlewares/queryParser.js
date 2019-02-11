/**
 * Middleware for query parsing.
 *
 * Parses query string and adds parsedQuery field
 * to request stream object.
 */

const queryParser = (req, res, next) => {
  const { url } = req;
  const params = {};

  let queryString = url.match(/\?.+$/);

  if (queryString) {
    queryString = queryString[0].replace(/\?/, '');

    const paramPairs = queryString.split('&');

    paramPairs.forEach((pair) => {
      const key = decodeURIComponent(pair.split('=')[0]);
      const value = decodeURIComponent(pair.split('=')[1]);

      params[key] = value;
    });

    req.parsedQuery = params;
  }

  next();
};

export default queryParser;
