export interface ListItem {
  name: string;
  email: string;
  uuid: string;
}

export interface GetList {
  (listId: string): Promise<ListItem[]>;
}
