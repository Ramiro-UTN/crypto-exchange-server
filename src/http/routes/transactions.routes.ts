import CommonRoutes from "./common.routes";
import { Application } from 'express';
import createTransactionAction from "../actions/transactions/create.transaction.action";
import listTransactionsAction from "../actions/transactions/list.transactions.action";
import getTransactionByIdAction from "../actions/transactions/get.transaction.by.id.action";
import editTransactionAction from "../actions/transactions/edit.transaction.action";
import deleteTransactionAction from "../actions/transactions/delete.transaction.action";

export class TransactionsRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'TransactionsRoutes');
  }

  setUpRoutes(): Application {

    this.app.post('/transactions', createTransactionAction.run);
    this.app.get('/transactions', listTransactionsAction.run);
    this.app.get('/transactions/:id', getTransactionByIdAction.run);
    this.app.patch('/transactions/:id', editTransactionAction.run);
    this.app.delete('/transactions/:id', deleteTransactionAction.run);
    return this.app;
  }
}