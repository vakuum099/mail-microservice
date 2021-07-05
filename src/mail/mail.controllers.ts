import { ResultOfGetList } from "../interfaces";
import { GetRecipientsList } from "./mail.interfaces";
import { getList } from "./mail.services";

export const getRecipientsList: GetRecipientsList = async (req, res) => {
  const resultOfGetList: ResultOfGetList = await getList(req);
  res.status(resultOfGetList.code).send(resultOfGetList.content);
};
