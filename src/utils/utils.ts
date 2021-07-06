import { Request } from 'express';
import { ListItem } from '../interfaces';

export const show = (data: ListItem[], req: Request) => {
  console.log(
    'email title:',
    req.body.title,
    '\n',
    'email text:',
    req.body.emailText,
    '\n'
  );
  data.map((el) => {
    console.log(`${el.name}: ${el.email};`);
  });
};
