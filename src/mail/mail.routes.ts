import { Router } from 'express';
import { prepareForSendingEmail } from './mail.controllers';

export const router = Router();

router.post('/:listId', prepareForSendingEmail);
