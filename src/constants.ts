import * as dotenv from 'dotenv';
import { DBOperationResult } from './interfaces';

const env = dotenv.config().parsed as dotenv.DotenvParseOutput;

export const dataBaseName = env['DB_NAME'];
export const dataBaseUser = env['DB_USER'];
export const dataBasePassword = env['DB_PASSWORD'];
export const dataBaseDialect = env['DB_DIALECT'];
export const dataBaseHost = env['DB_HOST'];
export const emailHost = env['EMAIL_HOST'];
export const emailHostPort = Number(env['EMAIL_HOST_PORT']);
export const emailPassword = env['EMAIL_PASSWORD'];
export const fromEmail = env['FROM_EMAIL'];
export const listBaseUrl = env['LIST_BASE_URL'];
export const port = Number(env['LISTEN_PORT']);

export const OK200: DBOperationResult = {
  code: 200,
  content: 'OK.',
};

export const addedData201: DBOperationResult = {
  code: 201,
  content: 'Data sucessfully added.',
};

export const errorNotFound404: DBOperationResult = {
  code: 404,
  content: 'Error 404. Not found.',
};
export const internalServerError500: DBOperationResult = {
  code: 500,
  content: 'Internal Server Error.',
};
