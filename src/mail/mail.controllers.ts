import { GetRecipientsList } from './mail.interfaces';
import { addEmailToDB, getEmailRecipients, sendEmails } from './mail.services';

export const sendEmailsByList: GetRecipientsList = async (req, res) => {
  try {
    const listOfContacts = await getEmailRecipients(req);
    const sendedEmails = await sendEmails(listOfContacts, req);
    await addEmailToDB(sendedEmails);
    res.status(200).send('Successfully sended emails by a List.');
  } catch {
    res.status(500).send('Inernal server Error');
  }
};
