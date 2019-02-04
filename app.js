import express from 'express';
import morgan from 'morgan';
import logger from './config/logger';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  logger.info(res.url);
  res.send('test');
});

export default app;
