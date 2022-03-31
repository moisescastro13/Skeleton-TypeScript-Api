import { Expose } from "class-transformer";

@Expose()
export class ArtistDto {
  name: string;
  nickname: string;
  nationality: string;
}
