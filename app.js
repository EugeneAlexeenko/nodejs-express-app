import express from 'express';
import morgan from 'morgan';
import logger from './config/logger';
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser);
app.use(queryParser);

app.get('*', (req, res) => {
  logger.info(res.url);

  logger.info(req.parsedCookies);
  logger.info(req.parsedQuery);

  logger.error('test error');

  res.send('test');
});

export default app;
