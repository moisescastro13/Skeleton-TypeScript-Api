import { Server } from "./Server";

export class StartUp {
  public static async Build(): Promise<void> {
    try {
      await Server.BootStrap();
    } catch (e) {
      console.log(e);
      process.exit(0);
    }
  }
}
