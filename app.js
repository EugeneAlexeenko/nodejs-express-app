import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from './config/config.json';
import Importer from './importer';
import Dirwatcher from './dirwatcher';
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import routes from './routes';

const app = express();
const dirwatcher = new Dirwatcher();
const importer = new Importer(dirwatcher); // eslint-disable-line no-unused-vars

dirwatcher.watch(config.watchPath, config.watchDelay);

app.use(morgan('dev'));
app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

export default app;
