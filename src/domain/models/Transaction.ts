import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true,
		min: 2,
		max: 20
	},
	action: {
		type: String,
		required: true,
	},
	crypto_code: {
		type: String,
		required: true,
		max: 4
	},
  crypto_amount: {
		type: Number,
		required: true,
	},
  money: {
		type: Number,
		required: true,
	},
  datetime: {
    type: String,
    required: true,

  }},
  {timestamps: true}
  );

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;