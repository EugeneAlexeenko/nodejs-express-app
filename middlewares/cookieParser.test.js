import cookieParser from './cookieParser';

describe('cookieParser', () => {
  let req;
  let expectedReq;
  let res;
  let nextFn;

  beforeEach(() => {
    req = {
      headers: {
      },
    };


    res = {};

    nextFn = jest.fn();
  });

  test('should populate req with parsedCookie field', () => {
    req.headers.cookie = 'COOKIE1=VALUE1;COOKIE2=VALUE2';
    expectedReq = {
      parsedCookies: {
        COOKIE1: 'VALUE1',
        COOKIE2: 'VALUE2',
      },
    };

    cookieParser(req, res, nextFn);

    expect(req).toHaveProperty('parsedCookies');
    expect(req.parsedCookies).toEqual(expectedReq.parsedCookies);
    expect(nextFn).toHaveBeenCalledWith();
  });

  test('should decode special symbols properly', () => {
    req.headers.cookie = '%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%801%3D%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B51%3B%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%802%3D12345';
    expectedReq = {
      parsedCookies: {
        параметр1: 'значение1',
        параметр2: '12345',
      },
    };

    cookieParser(req, res, nextFn);

    expect(req).toHaveProperty('parsedCookies');
    expect(req.parsedCookies).toEqual(expectedReq.parsedCookies);
    expect(nextFn).toHaveBeenCalledWith();
  });

  test('should not fall if no cookies provided', () => {
    req = {
      headers: {},
    };

    cookieParser(req, res, nextFn);

    expect(nextFn).toHaveBeenCalledWith();
  });
});
