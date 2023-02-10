import { User, IUser } from "../model/User";
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

  public async updateUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const userData: IUser = req.body;

    const existUser = await User.findById(id);

    if (!existUser) {
      res.status(404).json({ message: "Usuario não existe" });
      return;
    }

    try {
      await User.findByIdAndUpdate(id, userData);
      res.status(200).json({ message: "Usuario atualizado!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    const existUser = await User.findById(id);

    if (!existUser) {
      res.status(404).json({ message: "Usuario não existe" });
      return;
    }

    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "Usuario deletado" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new UserController();
