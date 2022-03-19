import { InversifyExpressServer } from "inversify-express-utils";
import express, { Application } from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";

import { ConfigKeys, IConfigurationService } from "./config";
import container from "./IocContainer";
import { IocTypes } from "./Common";

export class App {
  private readonly _configService: IConfigurationService;
  private _app: Application;
  public constructor(server: InversifyExpressServer) {
    this._configService = container.get<IConfigurationService>(
      IocTypes.IConfigurationService
    );
    this.build(server);
    this.initConfig(server);
    this.listen();
  }

  private initConfig(server: InversifyExpressServer): void {
    server.setConfig((app: Application) => {
      app.use(express.json());
      app.use(morgan("dev"));
      app.use(compression());
      app.use(cors());
      app.use(helmet());
    });
  }

  private build(server: InversifyExpressServer): void {
    this._app = server.build();
  }

  private listen(): void {
    this._app.listen(this._configService.get(ConfigKeys.PORT), () => {
      console.log(
        `App running in http://localhost:${this._configService.get(
          ConfigKeys.PORT
        )}`
      );
    });
  }
}
