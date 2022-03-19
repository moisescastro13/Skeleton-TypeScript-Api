import { DotenvParseOutput, parse } from "dotenv";
import * as fs from "fs";
import Path from "path";
import { injectable } from "inversify";
import { IConfigKeys } from "./envConfigType";
import { IConfigurationService } from "./IConfigurationService";

@injectable()
export class ConfigurationService implements IConfigurationService {
  private readonly envConfig: IConfigKeys | DotenvParseOutput;

  public constructor() {
    const isDevelopmentEnv: boolean = process.env.NODE_ENV !== "production";
    if (isDevelopmentEnv) {
      const envFilepath: string = Path.join(__dirname, "../../.env");
      const existFile: boolean = fs.existsSync(envFilepath);
      if (!existFile) {
        console.log(".env file does not exist");
        process.exit(0);
      }
      this.envConfig = parse(fs.readFileSync(envFilepath));
      console.table(this.envConfig);
    } else {
      this.envConfig = {
        MONGOCONN: process.env.MONGOCONN as string,
        PORT: process.env.PORT as string,
      };
    }
  }

  public get(key: string): string {
    return this.envConfig[key];
  }
}
