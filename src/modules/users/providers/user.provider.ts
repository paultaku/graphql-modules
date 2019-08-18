import { Injectable } from '@graphql-modules/di';
import { prisma } from '../../../generated/prisma-client';
import { UserCreateInput } from '../../../generated/prisma-client/index';


@Injectable()
export class UserProvider {  
  get users() {
    return prisma.users();
  }
  getUserById(id: number) {
    return (<any>this.users).find(user => user.id === id);
  }
}