import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";

import "./Api/Controllers/";
import container from "./IocContainer";
import { App } from "./App";

export class Server {
  private readonly _server: InversifyExpressServer;
  private constructor() {
    this._server = new InversifyExpressServer(container, null, {
      rootPath: "/api",
    });
    this.ConfigApp();
  }
  ConfigApp() {
    new App(this._server);
  }

  public static BootStrap(): Promise<void> {
    return new Promise((resolve) => {
      new this();
      resolve();
    });
  }
}
