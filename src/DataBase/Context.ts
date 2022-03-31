import { inject, injectable } from "inversify";
import mongoose from "mongoose";
import { IocTypes } from "../Common";
import { ConfigKeys, IConfigurationService } from "../config";
import { IDbContext } from "./IContext";

@injectable()
export class DbContext implements IDbContext {
  private readonly _configService: IConfigurationService;
  private readonly _dbUri: string;
  constructor(
    @inject(IocTypes.IConfigurationService) configService: IConfigurationService
  ) {
    this._configService = configService;
    this._dbUri = this._configService.get(ConfigKeys.DB_URI);
  }
  public async CreateConn(): Promise<void> {
    try {
      await mongoose
        .createConnection(this._dbUri, {
          user: this._configService.get(ConfigKeys.DB_USER),
          pass: this._configService.get(ConfigKeys.DB_PASSWORD),
        })
        .asPromise();
      console.log("Db is Connected");
    } catch (e: any) {
      throw new Error(`Error in dbConnection: ${e.message}`);
    }
  }
}
