import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from 'graphql-tools';
export async function bootstrap(appModule: GraphQLModule) {
    const { typeDefs, context, resolvers } = appModule;
    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

    const server = new ApolloServer({
        schema,
        context,
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