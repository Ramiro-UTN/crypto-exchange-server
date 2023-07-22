export class CreateTransactionCommand {
  private readonly user_id: string;
  private readonly action: string;
  private readonly crypto_code: string;
  private readonly crypto_amount: number;
  private readonly money: number;
  private readonly datetime: string;

  constructor(
    user_id: string,
    action: string,
    crypto_code: string,
    crypto_amount: number,
    money: number,
    datetime: string,
    ) 
    {
    if (!user_id) {
      throw new Error('user_id is required');
    }
    if (!action) {
      throw new Error('action is required');
    }
    if (!crypto_code) {
      throw new Error('crypto code card is required');
    }
    if (!crypto_amount) {
      throw new Error('crypto amount is required');
    }
    if (!money) {
      throw new Error('money is required');
    }
    if (!datetime) {
      throw new Error('date card is required');
    }
    
    
    this.user_id = user_id;
    this.action = action;
    this.crypto_code = crypto_code;
    this.crypto_amount = crypto_amount;
    this.money = money;
    this.datetime = datetime;
    
  }

  

  getUserId(): string {
    return this.user_id;
  }

  getAction(): string {
    return this.action;
  }

  getCryptoCode(): string {
    return this.crypto_code;
  }
  getCryptoAmount(): number {
    return this.crypto_amount;
  }
  getMoney(): number {
    return this.money;
  }
  getDatetime(): String {
    return this.datetime;
  }
}