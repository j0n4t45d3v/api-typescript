import express from "express";
import connectDb from "./config/config-db";
// import routes
import routerUser from "./routes/user-route";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middleware();
    this.database();
    this.routes();
  }

  public middleware(): void {
    this.app.use(express.json());
  }

  public database(): void {
    connectDb;
  }

  public routes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello world!");
    });

    this.app.use(routerUser);
  }
}

export default new App().app;
