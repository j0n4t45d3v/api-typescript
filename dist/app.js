"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_db_1 = __importDefault(require("./config/config-db"));
// import routes
const user_route_1 = __importDefault(require("./routes/user-route"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.database();
        this.routes();
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
    database() {
        config_db_1.default;
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("Hello world!");
        });
        this.app.use(user_route_1.default);
    }
}
exports.default = new App().app;
