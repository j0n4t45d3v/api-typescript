"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ConfigDb {
    constructor() {
        this.uri = `mongodb+srv://Jonatas09:${process.env.PASSWORD}@cluster0.jr22o4u.mongodb.net/?retryWrites=true&w=majority`;
        this.connect();
    }
    connect() {
        mongoose_1.default.set("strictQuery", true);
        mongoose_1.default.connect(this.uri).then(() => console.log("Db conectado!"));
    }
}
exports.default = new ConfigDb();
