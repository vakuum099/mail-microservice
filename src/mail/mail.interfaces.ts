import { Request, Response } from "express";

export interface GetRecipientsList {
  (req: Request, res: Response): Promise<void>;
}
