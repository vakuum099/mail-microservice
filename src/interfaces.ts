import { Request } from 'express';
import * as axios from 'axios';

export interface WorkWithList {
  (req: Request): Promise<axios.AxiosResponse<string>>;
}

export interface ResultOfGetList {
  code: number;
  content: string | ListItem[];
}

export interface ListItem {
  name: string;
  email: string;
}
