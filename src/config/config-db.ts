import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class ConfigDb {
  public uri = `mongodb+srv://Jonatas09:${process.env.PASSWORD}@cluster0.jr22o4u.mongodb.net/?retryWrites=true&w=majority`;
  constructor() {
    this.connect();
  }

  public connect(): void {
    mongoose.set("strictQuery", true);

    mongoose.connect(this.uri).then(() => console.log("Db conectado!"));
  }
}

export default new ConfigDb();
