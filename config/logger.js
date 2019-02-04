import { createLogger, transports } from 'winston';

const logLevel = process.env.LOG_LEVEL || 'debug';

const logger = createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      colorize: true,
      timestamp: () => new Date().toISOString(),
    }),
    new transports.File({
      level: logLevel,
      timestamp: () => new Date().toISOString(),
      filename: 'logs/app.log',
    }),
    new transports.Console({
      level: 'error',
      colorize: true,
      timestamp: () => new Date().toISOString(),
    }),
    new transports.File({
      level: 'error',
      timestamp: () => new Date().toISOString(),
      filename: 'logs/error.log',
    }),
  ],
});

export default logger;
