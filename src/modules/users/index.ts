import { GraphQLModule } from '@graphql-modules/core';
import { UserProvider, UserProviderToken } from './providers/user.provider';
import { buildSchemaSync } from 'type-graphql';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { loadSchemaFiles } from '@graphql-modules/sonar';
import UserResolver from './resolvers/user.resolver';
import { Container } from 'typedi';

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
        // container: (({ context }: ResolverData<any>) => context.container)
        container: () => {
          if (!Container.get(UserProviderToken)) {
            Container.set(UserProviderToken, UserProvider);
          }
          return Container;
        },
        // container: ({ context }) => {
        //   return context;
        // },
      })
    ],
});
