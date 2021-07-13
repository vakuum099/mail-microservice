import { Request, Response } from 'express';
import Mail from 'nodemailer/lib/mailer';
import { Optional } from 'sequelize/types';
import { ListItem } from '../list/list.interfaces';
import { SendedEmail } from './mail.model';

export interface AddEmailToDB {
  (sendEmailResult: MailAttributes[]): Promise<SendedEmail[]>;
}

export interface BuildEmail {
  (req: Request, recipientName: string, recipientEmail: string): Mail.Options;
}

export interface GetEmailRecipients {
  (req: Request): Promise<ListItem[]>;
}

export interface GetRecipientsList {
  (req: Request, res: Response): Promise<void>;
}

export interface MailAttributes {
  uuid?: string;
  contactId: string;
  emailInstance: string;
  emailStatus: string;
}

export interface MailCreationAttribute
  extends Optional<MailAttributes, 'uuid'> {}

export interface PersonaliseText {
  (person: string, text: string): string;
}

export interface SendEmails {
  (data: ListItem[], req: Request): Promise<MailAttributes[]>;
}

export interface SendOneEmail {
  (dataForEmail: Mail.Options): Promise<string>;
}


