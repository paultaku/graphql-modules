import { Injectable } from '@graphql-modules/di';
import { prisma, User } from '../../../generated/prisma-client';


@Injectable()
export class UserProvider {

  async getUsers() {
    return await prisma.user;
  }

  async getUserById(id: string): Promise<User> {
    return await prisma.user({
      id
    });
  }
}