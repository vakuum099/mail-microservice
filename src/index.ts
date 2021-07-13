import express from 'express';
import { port } from './constants';
import { SendedEmail } from './mail/mail.model';
import { router as mail } from './mail/mail.routes';
import { sequelize } from './sequelize';

sequelize.addModels([SendedEmail]);
sequelize.sync().then(() => console.log('DataBase sycronized'));

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', mail);
app.listen(port, () =>
  console.log(`Server listen to http://localhost:${port}`)
);
