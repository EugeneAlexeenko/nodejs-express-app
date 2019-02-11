import queryParser from './queryParser';

describe('queryParser', () => {
  let req;
  let res;
  let nextFn;

  beforeEach(() => {
    res = {};
    nextFn = jest.fn();
  });

  test('should populate request object with parsedQuery field', () => {
    const url = 'http://localhost:8080/test?param1=value1&param2=12345';
    const expectedReq = {
      parsedQuery: {
        param1: 'value1',
        param2: '12345',
      },
    };

    req = {
      url,
    };

    queryParser(req, res, nextFn);

    expect(req).toHaveProperty('parsedQuery');
    expect(req.parsedQuery).toEqual(expectedReq.parsedQuery);
    expect(nextFn).toHaveBeenCalledWith();
  });

  test('should not populate request with parsedQuery field if there is no query parameters', () => {
    const url = 'http://localhost:8080/test';

    req = {
      url,
    };

    queryParser(req, res, nextFn);

    expect(req).not.toHaveProperty('parsedQuery');
    expect(nextFn).toHaveBeenCalledWith();
  });

  test('should decode special symbols properly', () => {
    const url = 'http://xn----ctbjkdxqigq.xn--p1ai/%D1%82%D0%B5%D1%81%D1%82?%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%801=%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B51&%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%802=12345';

    const expectedReq = {
      parsedQuery: {
        параметр1: 'значение1',
        параметр2: '12345',
      },
    };

    req = {
      url,
    };

    queryParser(req, res, nextFn);

    expect(req).toHaveProperty('parsedQuery');
    expect(req.parsedQuery).toEqual(expectedReq.parsedQuery);
    expect(nextFn).toHaveBeenCalledWith();
  });
});
