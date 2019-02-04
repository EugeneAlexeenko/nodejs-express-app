import app from './app';
import logger from './config/logger';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`App listening on port ${port}!`);
});
