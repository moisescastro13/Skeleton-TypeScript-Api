import { model, Schema, Model, Document } from "mongoose";
import { RoleType } from "../../../Common";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  role: RoleType;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(RoleType),
      default: RoleType.USER,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User: Model<IUser> = model("User", UserSchema);
