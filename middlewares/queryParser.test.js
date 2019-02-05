import queryParser from './queryParser';

describe('queryParser', () => {
  let req;
  let res;
  let expectedReq;
  let nextFn;

  beforeEach(() => {
    req = {
      url: 'http://localhost:8080/test?param1=value1&param2=12345',
    };

    expectedReq = {
      parsedQuery: {
        param1: 'value1',
        param2: '12345',
      },
    };

    res = {};

    nextFn = jest.fn();
  });

  test('should populate request object with parsedQuery field', () => {
    queryParser(req, res, nextFn);
    expect(req).toHaveProperty('parsedQuery');
    expect(req.parsedQuery).toEqual(expectedReq.parsedQuery);
  });

  test('should call next()', () => {
    queryParser(req, res, nextFn);
    expect(nextFn).toHaveBeenCalled();
  });
});
