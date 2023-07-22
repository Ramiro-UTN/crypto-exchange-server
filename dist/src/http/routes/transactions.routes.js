"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRoutes = void 0;
const common_routes_1 = __importDefault(require("./common.routes"));
const create_transaction_action_1 = __importDefault(require("../actions/transactions/create.transaction.action"));
const list_transactions_action_1 = __importDefault(require("../actions/transactions/list.transactions.action"));
class TransactionsRoutes extends common_routes_1.default {
    constructor(app) {
        super(app, 'TransactionsRoutes');
    }
    setUpRoutes() {
        this.app.post('/transactions', create_transaction_action_1.default.run);
        this.app.get('/transactions', list_transactions_action_1.default.run);
        return this.app;
    }
}
exports.TransactionsRoutes = TransactionsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25zLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL3JvdXRlcy90cmFuc2FjdGlvbnMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9FQUEyQztBQUUzQyxrSEFBd0Y7QUFDeEYsZ0hBQXNGO0FBRXRGLE1BQWEsa0JBQW1CLFNBQVEsdUJBQVk7SUFDbEQsWUFBWSxHQUFnQjtRQUMxQixLQUFLLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVc7UUFFVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsbUNBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGtDQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFYRCxnREFXQyJ9