import  {User, IUser } from "../model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    const userData: IUser = req.body;

    const hash = bcrypt.hashSync(userData.password, 10);

    userData.password = hash;

    try {
      await User.create(userData);
      res.status(201).json({ message: "Usuario criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new UserController();
