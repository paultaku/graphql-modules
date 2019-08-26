import { GraphQLModule } from '@graphql-modules/core';
import * as path from 'path';
import { importSchema } from 'graphql-import';
import UsersModule from './modules/users';
import PostsModule from './modules/posts';

export const appModule = new GraphQLModule({
    name: 'App',
    typeDefs: importSchema(path.resolve(__dirname, './generated/schema.graphql')),
    imports: [
        PostsModule,
        UsersModule
    ],
});
