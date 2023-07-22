import { Request, Response } from "express";
import Transaction from "../../../domain/models/Transaction";

class EditTransactionAction {
  async run(req: Request, res: Response) {
    try {
      const transactionId = req.params.id as string;
      const changes = req.body;
      
      if (transactionId) {
        const transaction = await Transaction.findByIdAndUpdate(transactionId, changes, {new:true});

        if (transaction) {
          return res.status(200).json(transaction);
        } else {
          return res.status(404).send('could not found transaction');
        }
      } else {

        return res.status(400).send('Missing transaction id parameter');
      }

    } catch {
      return res.status(400).send('bad request');
    }

  }
}

export default new EditTransactionAction();