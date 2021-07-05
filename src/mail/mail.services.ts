import { Request } from "express";
import { listApi } from "../axios";
import { errorNotFound404, OK200 } from "../constants";
import { ListItem, ResultOfGetList } from "../interfaces";
import { show } from "../utils/utils";

export const getList = async (req: Request) => {
  const listId: string = req.params.listId;
  try {
    const response = (await listApi.get(listId)) as ListItem[];
    show(response.data, req);
    return OK200;
  } catch {
    return errorNotFound404;
  }
};
