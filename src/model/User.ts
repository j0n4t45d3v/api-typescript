import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
