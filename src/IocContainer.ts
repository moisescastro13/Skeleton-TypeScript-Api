import { Container } from "inversify";
import { IocTypes } from "./Common";
import { IConfigurationService, ConfigurationService } from "./config";
import { IDbContext, DbContext } from "./DataBase";
const container: Container = new Container();

container
  .bind<IConfigurationService>(IocTypes.IConfigurationService)
  .to(ConfigurationService)
  .inSingletonScope();
container.bind<IDbContext>(IocTypes.IDbContext).to(DbContext);

export default container;
