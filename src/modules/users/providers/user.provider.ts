import { Injectable, ProviderScope } from '@graphql-modules/di';
import { prisma } from '../../../generated/prisma-client';
import { Service, Token } from 'typedi';

export const UserProviderToken = new Token<UserProvider>(); 


@Service(UserProviderToken)
@Injectable({
  scope: ProviderScope.Application
})
export class UserProvider {  

  get users() {
    return prisma.users();
  }
  getUserById(id: number) {
    return (<any>this.users).find(user => user.id === id);
  }
}