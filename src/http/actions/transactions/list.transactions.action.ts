import { Request, Response } from "express";
import Transaction from "../../../domain/models/Transaction";

class ListTransactionsAction {
  async run(req: Request, res: Response) {
    try {
      const query = req.query.q as string;
      
      if (query) {
        const queryObject = JSON.parse(query);
        const userId = queryObject.user_id;
        //cualquier cosa agregar .lean() al metodo de abajo
        const transactions = await Transaction.find({ user_id: userId });

        if (transactions.length > 0) {
          return res.status(200).json(transactions);
        } else {
          return res.status(404).send('could not found transactions');
        }
      } else {

        return res.status(400).send('Missing query parameter');
      }

    } catch {
      return res.status(400).send('bad request');
    }

  }
}

export default new ListTransactionsAction();