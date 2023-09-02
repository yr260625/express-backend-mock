import { User } from 'src/entities/User';

export class UserUsecase {
  public async fetchAll(): Promise<Record<string, User[]>> {
    const allUsers = await User.find();
    return { users: allUsers };
  }

  public async fetchById(id: number): Promise<Record<string, User | null>> {
    const user = await User.findOneBy({ id });
    return { user };
  }
}
