import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";

import "./Routes/index";
import container from "./IocContainer";
import { App } from "./App";

export class Server {
  private readonly _server: InversifyExpressServer;

  private constructor() {
    this._server = new InversifyExpressServer(container);
    this.StartApp();
  }
  StartApp() {
    new App(this._server);
  }

  public static BootStrap(): Promise<void> {
    return new Promise((resolve) => {
      new this();
      resolve();
    });
  }
}
