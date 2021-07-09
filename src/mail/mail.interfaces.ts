import { Request, Response } from 'express';
import Mail from 'nodemailer/lib/mailer';
import { Optional } from 'sequelize/types';
import { DBOperationResult, ListItem } from '../interfaces';

export interface GetRecipientsList {
  (req: Request, res: Response): Promise<void>;
}

export interface PersonaliseText {
  (person: string, text: string): string;
}

export interface BuildEmail {
  (req: Request, recipientName: string, recipientEmail: string): Mail.Options;
}

export interface SendEmails {
  (data: ListItem[], req: Request): Promise<DBOperationResult>;
}

export interface SendOneEmail {
  (dataForEmail: Mail.Options): Promise<string>;
}

export interface MailAttributes {
  uuid?: string;
  contactId: string;
  emailInstance: string;
  emailStatus: string;
}

export interface MailCreationAttribute
  extends Optional<MailAttributes, 'uuid'> {}
