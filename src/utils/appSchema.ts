import { GraphQLSchema } from 'graphql';
import { printSchema } from 'graphql';
import * as path from 'path';
import * as fs from 'fs';
export const appSchema = (schema: GraphQLSchema) => {
    const content = printSchema(schema);
    fs.writeFile(path.resolve(__dirname, '../schema.gql'), content, (err) => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
}