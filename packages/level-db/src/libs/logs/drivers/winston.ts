import winston from 'winston';
import { LoggerOptions, Logger } from 'winston';
import Transport from 'winston-transport';
 /*
    Module Returns Winston Log Writer instance that stores Logs in levelDB
 */
export type createLoggerArgs = {
  name: string
  label: string
  level?: 'debug' | 'info'
  dir?: string
  meta?: any
}

export const createTransports = ({ dir }:any) => {
  return <Transport[]> [
    new winston.transports.File({ filename: `${dir}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${dir}/debug.log`, level: 'debug' }),
    new winston.transports.File({ filename: `${dir}/combined.log`, level: 'info' }),
  ];
}

export const devMode = (logger:Logger) => {
  winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
  });
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
};

export const createLogger = (args: createLoggerArgs) => {
  const { 
    name, 
    label, 
    level = 'debug', 
    dir = __dirname, 
    meta = {} 
  } = args;

  const logOptions : LoggerOptions = {
    level,
    defaultMeta: { service: label || name, ...meta },
    format: winston.format.json(),
    transports: createTransports({ dir }),
  }
  const logger = winston.createLogger(logOptions);
  if (process.env.NODE_ENV !== 'production') devMode(logger);
  winston.add(logger);

  return winston;
}

