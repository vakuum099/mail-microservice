import * as dotenv from 'dotenv';
import SMTPConnection from 'nodemailer/lib/smtp-connection';

const env = dotenv.config().parsed as dotenv.DotenvParseOutput;

export const dataBaseDialect = env['DB_DIALECT'];
export const dataBaseHost = env['DB_HOST'];
export const dataBaseName = env['DB_NAME'];
export const dataBasePassword = env['DB_PASSWORD'];
export const dataBaseUser = env['DB_USER'];
const emailHost = env['EMAIL_HOST'];
const emailHostPort = Number(env['EMAIL_HOST_PORT']);
const emailPassword = env['EMAIL_PASSWORD'];
export const fromEmail = env['FROM_EMAIL'];
export const listBaseUrl = env['LIST_BASE_URL'];
export const port = Number(env['LISTEN_PORT']);

export const config: SMTPConnection.Options = {
  host: emailHost,
  port: emailHostPort,
  secure: false,
  auth: {
    user: fromEmail,
    pass: emailPassword,
  },
};
