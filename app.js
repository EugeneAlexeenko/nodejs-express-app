import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';

import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());
app.use(routes);

export default app;
