import { getList } from '../list/list.service';
import {
  AddEmailToDB,
  GetEmailRecipients,
  MailAttributes,
  SendEmails,
} from './mail.interfaces';
import { SendedEmail } from './mail.model';
import { buildEmail, sendOneEmail } from './mail.utils';

export const addEmailToDB: AddEmailToDB = async (sendEmailResult) => {
  try {
    const resDB = await Promise.all(
      sendEmailResult.map(async (el) => {
        const { contactId, emailInstance, emailStatus } = el;
        const res = await SendedEmail.create({
          contactId,
          emailInstance,
          emailStatus,
        });
      })
    );
    return resDB;
  } catch (err) {
    return err;
  }
};

export const getEmailRecipients: GetEmailRecipients = async (req) => {
  const listId: string = req.params.listId;
  try {
    const listOfEmailRecipients = await getList(listId);
    return listOfEmailRecipients;
  } catch (err) {
    return err;
  }
};

export const sendEmails: SendEmails = async (data, req) => {
  try {
    const sendEmailResult = await Promise.all(
      data.map(async (el) => {
        const { email, name, uuid } = el;
        const dataForEmail = buildEmail(req, name, email);
        const emailStatus = await sendOneEmail(dataForEmail);
        const result: MailAttributes = {
          contactId: uuid,
          emailInstance: JSON.stringify(dataForEmail),
          emailStatus,
        };
        return result;
      })
    );
    return sendEmailResult;
  } catch (err) {
    return err;
  }
};
