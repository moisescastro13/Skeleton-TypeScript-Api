import { Expose } from "class-transformer";

@Expose()
export class DurationDto {
  strart: number;
  end: number;
  duration: number;
  constructor(start: number, end: number, duration: number) {
    this.duration = duration;
    this.strart = start;
    this.end = end;
  }
}
