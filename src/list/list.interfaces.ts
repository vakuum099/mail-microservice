import { ListItem } from '../interfaces';

export interface GetList {
  (listId: string): Promise<ListItem[]>;
}
