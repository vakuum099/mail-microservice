import express from 'express';
import { port } from './constants';
import { router as mail } from './mail/mail.routes';

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', mail);
app.listen(port, () =>
  console.log(`Server listen to http://localhost:${port}`)
);
