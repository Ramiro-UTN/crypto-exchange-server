import { Request, Response } from "express";
import Transaction from "../../../domain/models/Transaction";

class DeleteTransactionAction {
  async run(req: Request, res: Response) {
    try {
      const transactionId = req.params.id as string;

      if (transactionId) {
        
        const transaction = await Transaction.deleteOne({_id: transactionId})
        
        return res.status(200).json(transaction);
       
      } else {

        return res.status(400).send('Missing transaction id parameter');
      }

    } catch {
      
      return res.status(400).send('bad request');
    }

  }
}

export default new DeleteTransactionAction();