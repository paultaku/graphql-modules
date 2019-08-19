import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer, mergeSchemas } from "apollo-server";
import { appSchema } from "./utils/appSchema";
import { generateNexusPrismaSchema } from './utils/generateNexusPrismaSchema';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { prisma } from './generated/prisma-client/index';
export async function bootstrap(appModule: GraphQLModule) {
    const { context, injector, selfProviders } = appModule;
    console.log(selfProviders, selfProviders.length);
    const rootSchema = appModule.schema;
    const prismaSchema = generateNexusPrismaSchema();

    await appSchema(rootSchema);

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const server = new ApolloServer({
        typeDefs: mergeGraphQLSchemas([
            prismaSchema,
            rootSchema
        ]),
        schema: mergeSchemas({
            schemas: [
                rootSchema,
                prismaSchema
            ]
        }),
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