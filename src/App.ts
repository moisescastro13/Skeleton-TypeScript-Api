import { InversifyExpressServer } from "inversify-express-utils";
import express, { Application } from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";

import { ConfigKeys, IConfigurationService } from "./config";
import container from "./IocContainer";
import { IocTypes } from "./Common";
import { IDbContext } from "./DataBase";

export class App {
  private readonly _configService: IConfigurationService;
  private readonly _context: IDbContext;
  private _app: Application;
  public constructor(server: InversifyExpressServer) {
    this._configService = container.get<IConfigurationService>(
      IocTypes.IConfigurationService
    );
    this._context = container.get<IDbContext>(IocTypes.IDbContext);
    this.initConfig(server);
    this.build(server);
    this.StartDb();
    this.listen();
  }

  private StartDb() {
    this._context.CreateConn();
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
