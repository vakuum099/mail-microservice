import { listApi } from '../axios';
import { listBaseUrl } from '../constants';
import { ListItem } from '../interfaces';
import { GetList } from './list.interfaces';

export const getList: GetList = async (listId) => {
  const settings = {  baseURL: listBaseUrl }
  const response = (await listApi.get(listId, settings )) as { data: ListItem[] };
  return response.data;
};
