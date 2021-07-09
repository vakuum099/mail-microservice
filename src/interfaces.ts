import { Request } from 'express';
import * as axios from 'axios';

export interface WorkWithList {
  (req: Request): Promise<axios.AxiosResponse<string>>;
}

// export interface DBOperationResult {
//   code: number;
//   content: string | ListItem[];
// }

export interface DBOperationResult {
  code: number;
  content: string;
}

export interface ListItem {
  name: string;
  email: string;
  uuid: string;
}
