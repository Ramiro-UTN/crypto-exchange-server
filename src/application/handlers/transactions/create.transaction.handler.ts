import Transaction from "../../../domain/models/Transaction";
import { CreateTransactionCommand } from '../../commands/transactions/create.transaction.command';

class CreateTransactionHandler {
  async execute(command: CreateTransactionCommand) {


    const userId = command.getUserId();

    if (userId) {
      const newTransaction = new Transaction({
        user_id: command.getUserId(),
        action: command.getAction(),
        crypto_code: command.getCryptoCode(),
        crypto_amount: command.getCryptoAmount(),
        money: command.getMoney(),
        datetime: command.getDatetime(),
      });

      await newTransaction.save();


    } else {

      throw new Error('invalid transaction');
    }

  }

}

export default new CreateTransactionHandler();