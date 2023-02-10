import { Router } from "express";
import UserController from "../controller/user-controller";

const router = Router();

router.get("/users", UserController.getAllUsers);

router.post("/users", UserController.createUser);

router.patch("/users/:id", UserController.updateUser);

router.delete("/users/:id", UserController.deleteUser);

export default router;
