import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

export default app;
