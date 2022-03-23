import { Expose } from "class-transformer";

@Expose()
export class DurationDto {
  strart: number;
  end: number;
  duration: number;
}
