import { GraphQLModule } from '@graphql-modules/core';
import UsersModule from './modules/users';
import PostsModule from './modules/posts';

export const appModule = new GraphQLModule({
    imports: [PostsModule, UsersModule],
});
