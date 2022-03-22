import { IConfigurationService } from "../../config";
import { IDbContext } from "../../DataBase";
export const IocTypes = {
  IConfigurationService: Symbol.for("IConfigurationService"),
  IDbContext: Symbol.for("IDbContext"),
};
