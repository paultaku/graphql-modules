import {prisma} from "../generated/prisma-client/index";
import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import datamodelInfo from "../generated/nexus-prisma";
import * as path from "path";
export function generateNexusPrismaSchema() {
    const Query = prismaObjectType<"Query">({
        name: "Query",
        definition: (t) => t.prismaFields(["*"]),
    });

    const Mutation = prismaObjectType<"Mutation">({
        name: "Mutation",
        definition: (t) => t.prismaFields(["*"]),
    });

    return makePrismaSchema({
        types: [
            Query,
            Mutation
        ],
      
        prisma: {
          client: prisma,
          datamodelInfo,
        },
      
        outputs: {
          schema: path.resolve(__dirname, "../generated/schema.graphql"),
          typegen: false,
        },
      });
}