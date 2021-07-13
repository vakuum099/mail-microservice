import { listApi } from '../axios';
import { listBaseUrl } from '../constants';
import { GetList, ListItem } from './list.interfaces';

export const getList: GetList = async (listId) => {
  const settings = { baseURL: listBaseUrl };
  listApi.get(listId, settings);
  const response = (await listApi.get(listId, settings)) as {
    data: ListItem[];
  };
  return response.data;
};
