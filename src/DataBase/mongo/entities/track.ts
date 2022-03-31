import { model, Schema, Model, Document, ObjectId, Types } from "mongoose";

export const TrackSchema: Schema = new Schema<ITrackDocument>(
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

export class Track {
  name: string;
  album: string;
  cover: string;
  artist: IArtistDocument;
  duration: IDurationDocument;
  mediaId: ObjectId;
  constructor(
    name: string,
    album: string,
    cover: string,
    artist: IArtistDocument,
    duration: IDurationDocument,
    mediaId: ObjectId
  ) {
    this.name = name;
    this.album = album;
    this.cover = cover;
    this.artist = artist;
    this.duration = duration;
    this.mediaId = mediaId;
  }
}
export class Duration {
  strart: number;
  end: number;
  duration: number;
  constructor(start: number, end: number, duration: number) {
    this.duration = duration;
    this.strart = start;
    this.end = end;
  }
}
export class Artist {
  name: string;
  nickname: string;
  nationality: string;
  constructor(name: string, nickname: string, nationality: string) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }
}

export interface ITrackDocument extends Track, Document {
  name: string;
  album: string;
  cover: string;
  artist: IArtistDocument;
  duration: IDurationDocument;
  mediaId: ObjectId;
}
export interface IDurationDocument extends Duration, Document {
  strart: number;
  end: number;
  duration: number;
}
export interface IArtistDocument extends Artist, Document {
  name: string;
  nickname: string;
  nationality: string;
}

export const Tracks: Model<ITrackDocument> = model("Track", TrackSchema);
