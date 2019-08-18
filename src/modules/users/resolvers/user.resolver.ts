import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User } from "../types/user.type";
import { UserProvider } from '../providers/user.provider';
import { UserCreateInput } from '../../../generated/prisma-client/index';

@Resolver(of => User)
export default class UserResolver {
  constructor(private userProvider: UserProvider){}

  @Query(returns => [User])
  async getAllUsers(): Promise<any> {
    const users = await this.userProvider.users;
    console.log(`user length `, this.userProvider.users);
    return users;
  }

//   @Query(returns => [])
//   chats() {
//     return this.chatsProvider.getChats();
//   }
  
//   @Query(returns => Chat)
//   chat(@Arg('id') id: number) {
//     return this.chatsProvider.getChat(id);
//   }

  // @Mutation(returns => User)
  // createUser(@Arg('data') data: UserCreateInput) {
  //   return this.userProvider.createUser(data);
  // }

//   @Mutation(returns => Int)
//   deleteChat(@Arg('id') id: number) {
//     return this.chatsProvider.deleteChat(id);
//   }

}