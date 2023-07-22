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
class ListTransactionsAction {
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = req.query.q;
            console.log(query, typeof query);
            if (query) {
                const transactions = yield Transaction_1.default.find({ user_id: query }).lean();
                return res.status(200).json(transactions);
            }
            else {
                return res.status(400).send('Missing query parameter');
            }
        });
    }
}
exports.default = new ListTransactionsAction();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC50cmFuc2FjdGlvbnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2h0dHAvYWN0aW9ucy90cmFuc2FjdGlvbnMvbGlzdC50cmFuc2FjdGlvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUZBQTZEO0FBRTdELE1BQU0sc0JBQXNCO0lBQ3BCLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFFbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQztZQUVqQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxNQUFNLFlBQVksR0FBRyxNQUFNLHFCQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXZFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFFM0M7aUJBQU07Z0JBRUwsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQ3hEO1FBR0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMifQ==