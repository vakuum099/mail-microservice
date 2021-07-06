import { Request } from 'express';
import { errorNotFound404, OK200 } from '../constants';
import { getList } from '../list/list.service';
import { show } from '../utils/utils';

export const getEmailRecipients = async (req: Request) => {
  const listId: string = req.params.listId;
  try {
    const listOfEmailRecipients = await getList(listId);
    show(listOfEmailRecipients, req);
    return OK200;
  } catch {
    return errorNotFound404;
  }
};
