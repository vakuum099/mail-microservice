import { Router } from 'express';
import { sendEmailsByList } from './mail.controllers';

export const router = Router();

router.post('/:listId', sendEmailsByList);
