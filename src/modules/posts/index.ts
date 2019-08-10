import { GraphQLModule } from '@graphql-modules/core';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import UsersModule from '../users';

const typeDefs = mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`));
export default new GraphQLModule({
    name: 'Post',
    resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/resolvers/`)),
    typeDefs,
    providers: [],
    imports: [
        UsersModule
    ],
});
