import { GraphQLModule } from '@graphql-modules/core';
import * as path from 'path';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';
import { UserProvider } from './user.provider';

export default new GraphQLModule({
    // typeDefs: ,
    typeDefs:`
        ${importSchema(path.join(__dirname, './schema.graphql'))}
        
        schema {
        query: Query,
        }
    `,
    resolvers,
    providers: [
      UserProvider
    ],
});