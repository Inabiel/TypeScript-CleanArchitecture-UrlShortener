import { Client } from "./prisma";
import mapper from "mapper-tsk";
import { User } from "../../../domain/user/user";

export class userModel {
  async getByEmail(email: string): Promise<User> {
    const isEmailUsed = await Client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!isEmailUsed) {
      return null;
    }
    return mapper.mapObject(isEmailUsed, new User());
  }

  async register(User: User): Promise<User> {
    const registerUser = await Client.user.create({
      data: {
        name: User.name,
        email: User.email,
        password: User.password,
      },
    });
    return registerUser;
  }
}
