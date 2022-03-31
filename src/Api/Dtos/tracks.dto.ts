import { Expose } from "class-transformer";
import { IsNotEmpty, Length, ValidateNested } from "class-validator";
import { Types } from "mongoose";

import { ArtistDto } from "./Artist.dto";
import { DurationDto } from "./Duration.dto";

export class TrackDto {
  @Expose()
  @Length(5, 20)
  @IsNotEmpty()
  public name: string;
  @Expose()
  @IsNotEmpty()
  public album: string;
  @Expose()
  @IsNotEmpty()
  public cover: string;
  @Expose()
  @IsNotEmpty()
  @ValidateNested()
  artist: ArtistDto;
  @Expose()
  @IsNotEmpty()
  @ValidateNested()
  public duration: DurationDto;
  @Expose()
  @IsNotEmpty()
  public mediaId: Types.ObjectId;
}
