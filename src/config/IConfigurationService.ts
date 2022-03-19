import { ConfigKeys } from "./configKeys";
export interface IConfigurationService {
  get(ConfigKeys: string): string;
}
