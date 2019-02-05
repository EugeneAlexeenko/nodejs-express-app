import cookieParser from './cookieParser';

describe('cookieParser', () => {
  let req;
  let expectedReq;
  let res;
  let nextFn;

  beforeEach(() => {
    req = {
      headers: {
        cookie: 'COOKIE1=VALUE1;COOKIE2=VALUE2',
      },
    };

    expectedReq = {
      parsedCookies: {
        COOKIE1: 'VALUE1',
        COOKIE2: 'VALUE2',
      },
    };

    res = {};

    nextFn = jest.fn();
  });

  test('should populate req with parsedCookie field', () => {
    cookieParser(req, res, nextFn);

    expect(req).toHaveProperty('parsedCookies');
    expect(req.parsedCookies).toEqual(expectedReq.parsedCookies);
  });

  test('should call next()', () => {
    cookieParser(req, res, nextFn);

    expect(nextFn).toHaveBeenCalled();
  });

  test('should not fall if no cookies provided', () => {
    req = {
      headers: {
        cookie: '',
      },
    };

    cookieParser(req, res, nextFn);

    expect(nextFn).toHaveBeenCalled();
  });
});
