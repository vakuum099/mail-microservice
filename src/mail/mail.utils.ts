import * as nodemailer from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import Mail from 'nodemailer/lib/mailer';
import {
  emailHost,
  emailHostPort,
  emailPassword,
  errorNotFound404,
  fromEmail,
  addedData201,
  internalServerError500,
  OK200,
} from '../constants';
import {
  BuildEmail,
  PersonaliseText,
  SendOneEmail,
  SendEmails,
} from './mail.interfaces';
import { SendedEmail } from './mail.model';

const config: SMTPConnection.Options = {
  host: emailHost,
  port: emailHostPort,
  secure: false,
  auth: {
    user: fromEmail,
    pass: emailPassword,
  },
};

const sendOneEmail: SendOneEmail = async (dataForEmail) => {
  const transporter = nodemailer.createTransport(config);
  const info = await transporter.sendMail(dataForEmail);
  return info.messageId;
};

export const sendEmails: SendEmails = async (data, req) => {
  if (data.length === 0) {
    return errorNotFound404;
  }
  for (let i = 0; i < data.length; i++) {
    const recipientEmail = data[i].email;
    const recipientName = data[i].name;
    const contactId = data[i].uuid;
    const dataForEmail = buildEmail(req, recipientName, recipientEmail);
    const sendEmailResult = await sendOneEmail(dataForEmail);
    const dBOperationResult = await addEmailToDB(
      contactId,
      dataForEmail,
      sendEmailResult
    );
  }
  return OK200;
};

const buildEmail: BuildEmail = (req, recipientName, recipientEmail) => {
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

export const addEmailToDB = async (
  contactId: string,
  email: Mail.Options,
  emailStatus: string
) => {
  const emailInst: string = JSON.stringify(email);
  try {
    const res = await SendedEmail.create({
      contactId,
      emailInstance: emailInst,
      emailStatus,
    });
    return addedData201;
  } catch {
    return internalServerError500;
  }
};
