import * as dotenv from 'dotenv';
import { ResultOfGetList } from './interfaces';

const env = dotenv.config().parsed as dotenv.DotenvParseOutput;

export const port = Number(env['MAIL_PORT']);
export const listBaseUrl = env['LIST_BASE_URL'];

export const errorNotFound404: ResultOfGetList = {
  code: 404,
  content: 'Error 404. Not found.',
};

export const OK200: ResultOfGetList = {
  code: 200,
  content: 'OK.',
};
