import { Injectable } from '@graphql-modules/di';

@Injectable()
export class UserProvider {
  users = [
    {
      id: '0',
      name: 'Jhon',
    }
  ];
  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }
}