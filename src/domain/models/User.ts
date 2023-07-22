import mongoose from "mongoose";

interface User {
  userName: string;
  email: string;
  password?: string;
}

const UserSchema = new mongoose.Schema<User>({
	userName: {
		type: String,
		required: true,
		min: 2,
		max: 50
	},
	email: {
		type: String,
		required: true,
		max: 50,
		unique: true
	},
	password: {
		type: String,
		required: true,
		min: 5
	}},
	{timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;