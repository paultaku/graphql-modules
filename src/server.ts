import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { appSchema } from "./utils/appSchema";
import { generateNexusPrismaSchema } from './utils/generateNexusPrismaSchema';
import { printSchema } from 'graphql';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { mergeSchemas } from '@kamilkisiela/graphql-tools';
import { prisma } from './generated/prisma-client/index';
export async function bootstrap(appModule: GraphQLModule) {
    const { context, typeDefs, resolvers } = appModule;
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
        resolverValidationOptions: { requireResolversForResolveType: false },
    });

    const prismaSchema = generateNexusPrismaSchema();
    mergeSchemas({
        schemas: [prismaSchema, schema]
    })
    await appSchema(schema);
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const server = new ApolloServer({
        typeDefs: mergeGraphQLSchemas([
            prismaSchema,
            schema
        ]),
        context: {
            ...context,
            prisma,
        },
        introspection: true,
        tracing: process.env.NODE_ENV === 'development', // tracing while in development
        playground: true, // ALERT: WE SHOW THE GRAPHQL PLAYGROUND ALSO IN PRODUCTION FOR THIS SAMPLE APP, REMOVE THIS LINE WHEN YOU ONLY WANT IT IN DEVELOPMENT,
        engine: {
            apiKey: process.env.ENGINE_KEY,
        },
    });

    server.listen({
        port,
    })
    .then(() => {
        console.log(`Server is running on http://localhost:${port}`)
    });

}