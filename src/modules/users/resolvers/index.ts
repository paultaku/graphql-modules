import { UserProvider } from '../providers/user';
import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';
import { User } from '../types/user.type';

@Resolver(of => User)
export class UserResolver {
  constructor(private userProvider: UserProvider){}

  @Query(returns => [User])
  async users() {
    return await this.userProvider.getUsers();
  }
  
  @Query(returns => User)
  async user(@Arg('id') id: string) {
    return await this.userProvider.getUserById(id);
  }

//   @Mutation(returns => User)
//   createChat(@Arg('title') title: string, @Arg('description') description: string) {
//     return this.userProvider.createChat({ id: Math.random(), title, description });
//   }

//   @Mutation(returns => Int)
//   deleteChat(@Arg('id') id: number) {
//     return this.userProvider.deleteChat(id);
//   }

}