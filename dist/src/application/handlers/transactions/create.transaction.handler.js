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
const Transaction_1 = __importDefault(require("../../../domain/models/Transaction"));
class CreateTransactionHandler {
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = command.getUserId();
            if (userId) {
                const newTransaction = new Transaction_1.default({
                    user_id: command.getUserId(),
                    action: command.getAction(),
                    crypto_code: command.getCryptoCode(),
                    crypto_amount: command.getCryptoAmount(),
                    money: command.getMoney(),
                    datetime: command.getDatetime(),
                });
                yield newTransaction.save();
            }
            else {
                throw new Error('invalid transaction');
            }
        });
    }
}
exports.default = new CreateTransactionHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnRyYW5zYWN0aW9uLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vaGFuZGxlcnMvdHJhbnNhY3Rpb25zL2NyZWF0ZS50cmFuc2FjdGlvbi5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQTZEO0FBRzdELE1BQU0sd0JBQXdCO0lBQ3RCLE9BQU8sQ0FBQyxPQUFpQzs7WUFHN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRW5DLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sY0FBYyxHQUFHLElBQUkscUJBQVcsQ0FBQztvQkFDckMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQzVCLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUMzQixXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRTtvQkFDcEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUU7b0JBQ3hDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUN6QixRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtpQkFDaEMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2FBRzdCO2lCQUFNO2dCQUVMLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztRQUVILENBQUM7S0FBQTtDQUVGO0FBRUQsa0JBQWUsSUFBSSx3QkFBd0IsRUFBRSxDQUFDIn0=