import { GraphQLModule } from '@graphql-modules/core';
import { UserProvider } from './providers/user.provider';
import UserResolver from './resolvers/user.resolver';
import { buildSchemaSync } from 'type-graphql';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { loadSchemaFiles } from '@graphql-modules/sonar';

const resolvers = [
  UserResolver
];

export default new GraphQLModule({
    name: 'User',
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`)),
    providers: [
      UserProvider,
      ...resolvers,
    ],
    extraSchemas: [
      buildSchemaSync({
        resolvers,
        emitSchemaFile: false,
        container: ({ context }) => context.injector
      })
    ],
    context: (config, session, context) => {
      console.log('user module.');
    }
});
