import { Container } from "inversify";
import { IocTypes } from "./Common";
import { IConfigurationService, ConfigurationService } from "./config";
const container: Container = new Container();

container
  .bind<IConfigurationService>(IocTypes.IConfigurationService)
  .to(ConfigurationService);

export default container;
