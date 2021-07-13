import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { config, fromEmail } from '../constants';
import { BuildEmail, PersonaliseText, SendOneEmail } from './mail.interfaces';

export const buildEmail: BuildEmail = (req, recipientName, recipientEmail) => {
  const { emailTitle, emailText, emailHtml } = req.body;
  const personalizedText = personaliseText(recipientName, emailText);
  const email: Mail.Options = {
    from: fromEmail,
    to: recipientEmail,
    subject: emailTitle,
    text: personalizedText,
    html: emailHtml,
  };
  return email;
};

const personaliseText: PersonaliseText = (person, text) => {
  const textTemp = text.split('<PERSON>');
  const personalizesText = textTemp.length > 1 ? textTemp.join(person) : text;
  return personalizesText;
};

export const sendOneEmail: SendOneEmail = async (dataForEmail) => {
  const transporter = nodemailer.createTransport(config);
  const info = await transporter.sendMail(dataForEmail);
  return info.messageId;
};
