"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TransactionSchema = new mongoose_1.default.Schema({
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
        type: Date,
        required: true,
    }
}, { timestamps: true });
const Transaction = mongoose_1.default.model("Transaction", TransactionSchema);
exports.default = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL21vZGVscy9UcmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQUVoQyxNQUFNLGlCQUFpQixHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDN0MsT0FBTyxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEVBQUU7S0FDUDtJQUNELE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZDtJQUNELFdBQVcsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxHQUFHLEVBQUUsQ0FBQztLQUNOO0lBQ0EsYUFBYSxFQUFFO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNkO0lBQ0EsS0FBSyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNkO0lBQ0EsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSTtLQUVmO0NBQUMsRUFDRixFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FDakIsQ0FBQztBQUVKLE1BQU0sV0FBVyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRXJFLGtCQUFlLFdBQVcsQ0FBQyJ9