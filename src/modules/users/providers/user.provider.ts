import { Injectable, ProviderScope } from '@graphql-modules/di';
import { prisma } from '../../../generated/prisma-client';


@Injectable({
  scope: ProviderScope.Application
})
export class UserProvider {  

  constructor() {
    console.log('UserProvider created.');
  }
  get users() {
    return prisma.users();
  }
  getUserById(id: number) {
    return (<any>this.users).find(user => user.id === id);
  }
}