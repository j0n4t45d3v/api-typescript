"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const router = (0, express_1.Router)();
router.get("/users", user_controller_1.default.getAllUsers);
router.post("/users", user_controller_1.default.createUser);
router.patch("users", user_controller_1.default.updateUser);
router.delete("users", user_controller_1.default.deleteUser);
exports.default = router;
