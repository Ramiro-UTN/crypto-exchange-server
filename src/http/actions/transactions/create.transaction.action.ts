import { Request, Response } from "express";
import createTransactionHandler from "../../../application/handlers/transactions/create.transaction.handler";
import { CreateTransactionCommand } from "../../../application/commands/transactions/create.transaction.command";

class CreateTransactionAction {
  async run(req: Request, res: Response) {
    const {user_id, action, crypto_code, crypto_amount, money, datetime} = req.body;

    try {
      const command: CreateTransactionCommand = new CreateTransactionCommand(
        user_id, 
        action, 
        crypto_code, 
        crypto_amount, 
        money, 
        datetime);

      await createTransactionHandler.execute(command);

      return res.status(201).json({message: "Transaction created"});
    } catch (e) {
      const {message} = e as Error;
      res.status(400).json({message: message});
    }


  }
}

export default new CreateTransactionAction();