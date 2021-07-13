import { UUID, UUIDV4 } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';
import { MailAttributes, MailCreationAttribute } from './mail.interfaces';

@Table
export class SendedEmail extends Model<MailAttributes, MailCreationAttribute> {
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  uuid!: string;

  @Column
  emailInstance!: string;

  @Column
  contactId!: string;

  @Column
  emailStatus!: string;
}
