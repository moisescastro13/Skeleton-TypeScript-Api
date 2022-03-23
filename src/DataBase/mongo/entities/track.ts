import { model, Schema, Model, Document, ObjectId, Types } from "mongoose";

export interface ITrack extends Document {
  name: string;
  album: string;
  cover?: string;
  artist: IArtist;
  duration: IDuration;
  mediaId: ObjectId;
}
export interface IDuration {
  strart: number;
  end: number;
  duration: number;
}
export interface IArtist {
  name: string;
  nickname: string;
  nationality: string;
}

const TrackSchema: Schema = new Schema<ITrack>(
  {
    name: { type: String, required: true },
    album: { type: String, required: true },
    cover: {
      type: String,
      required: false,
      validate: { validator: () => true, message: "ERROR_URL" },
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String },
    },
    duration: {
      strart: { type: Number },
      end: { type: Number },
      duration: { type: Number },
    },
    mediaId: {
      type: Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Track: Model<ITrack> = model("Track", TrackSchema);
