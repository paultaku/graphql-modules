import { GraphQLModule } from '@graphql-modules/core';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { UserProvider } from './providers/user';
console.log(loadResolversFiles(`${__dirname}/resolvers/`));
export default new GraphQLModule({
    name: 'User',
    resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/resolvers/`)),
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`)),
    providers: [
      UserProvider
    ],
    imports: [],
});
