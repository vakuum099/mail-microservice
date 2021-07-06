import { ResultOfGetList } from '../interfaces';
import { GetRecipientsList } from './mail.interfaces';
import { getEmailRecipients } from './mail.services';

export const prepareForSendingEmail: GetRecipientsList = async (req, res) => {
  const resultOfGetList: ResultOfGetList = await getEmailRecipients(req);
  res.status(resultOfGetList.code).send(resultOfGetList.content);
};
