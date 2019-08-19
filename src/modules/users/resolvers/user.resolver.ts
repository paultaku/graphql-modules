import { Resolver, Query } from "type-graphql";
import { User } from "../types/user.type";
import { UserProvider } from '../providers/user.provider';

@Resolver(of => User)
export default class UserResolver {
  constructor(private userProvider: UserProvider){
    console.log(`user resolver created.`, userProvider);
  }

  @Query(returns => [User])
  async getAllUsers(ctx): Promise<any> {
    console.log('user resolver getAllUsers', ctx);
    const users = await this.userProvider.users;
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