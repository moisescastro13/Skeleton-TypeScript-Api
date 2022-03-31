import { MappingProfile } from "@automapper/core";
import { Track, Duration, Artist } from "../DataBase/";
import { TrackDto, DurationDto, ArtistDto } from "../Api";

export const profile: MappingProfile = (mapper) => {
  mapper.createMap(DurationDto, Duration);
  mapper.createMap(TrackDto, Track);
};
