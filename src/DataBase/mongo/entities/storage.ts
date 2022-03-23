import { model, Schema, Model, Document } from "mongoose";

interface IStorage extends Document {
  url: string;
  filename: string;
}

const StorageSchema: Schema = new Schema<IStorage>(
  {
    filename: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Storage: Model<IStorage> = model("Storage", StorageSchema);
