"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_transaction_handler_1 = __importDefault(require("../../../application/handlers/transactions/create.transaction.handler"));
const create_transaction_command_1 = require("../../../application/commands/transactions/create.transaction.command");
class CreateTransactionAction {
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, action, crypto_code, crypto_amount, money, datetime } = req.body;
            try {
                const command = new create_transaction_command_1.CreateTransactionCommand(user_id, action, crypto_code, crypto_amount, money, datetime);
                yield create_transaction_handler_1.default.execute(command);
                return res.status(201).json({ message: "Transaction created" });
            }
            catch (e) {
                const { message } = e;
                res.status(400).json({ message: message });
            }
        });
    }
}
exports.default = new CreateTransactionAction();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnRyYW5zYWN0aW9uLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9odHRwL2FjdGlvbnMvdHJhbnNhY3Rpb25zL2NyZWF0ZS50cmFuc2FjdGlvbi5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1SUFBNkc7QUFDN0csc0hBQWlIO0FBRWpILE1BQU0sdUJBQXVCO0lBQ3JCLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDbkMsTUFBTSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUVoRixJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHLElBQUkscURBQXdCLENBQzFDLE9BQU8sRUFDUCxNQUFNLEVBQ04sV0FBVyxFQUNYLGFBQWEsRUFDYixLQUFLLEVBQ0wsUUFBUSxDQUFDLENBQUM7Z0JBRVosTUFBTSxvQ0FBd0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRWhELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO2FBQy9EO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLENBQVUsQ0FBQztnQkFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQzthQUMxQztRQUdILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSx1QkFBdUIsRUFBRSxDQUFDIn0=