"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const hash = bcrypt_1.default.hashSync(userData.password, 10);
            userData.password = hash;
            try {
                yield User_1.User.create(userData);
                res.status(201).json({ message: "Usuario criado com sucesso!" });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.User.find();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
}
exports.default = new UserController();
