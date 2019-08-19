import { GraphQLModule } from '@graphql-modules/core';
import { UserProvider } from './providers/user.provider';
import { buildSchemaSync } from 'type-graphql';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { loadSchemaFiles } from '@graphql-modules/sonar';
import UserResolver from './resolvers/user.resolver';

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
        container: (ctx) => {
          console.log(`extra schemas context.`, Object.keys(ctx.context));
          return ctx.context
        }
      })
    ],
    context: (config, session, context) => {
      console.log('user module.');
    }
});
