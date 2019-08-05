
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import UsersModule from './modules/users/index';
// import { typeDefs } from './generated/prisma-client/prisma-schema';


const server = new ApolloServer({
    // typeDefs,
    modules: [
        UsersModule
    ],
    playground: true
  });
  server.listen({
      port: 4000,
  })
  .then(() => {
      console.log(`Server is running on http://localhost:4000`)
  });