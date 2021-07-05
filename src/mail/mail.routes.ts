import { Router } from "express";
import { getRecipientsList } from "./mail.controllers";

export const router = Router();

router.post("/:listId", getRecipientsList);
