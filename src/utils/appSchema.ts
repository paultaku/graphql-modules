import { GraphQLSchema } from 'graphql';
import { printSchema } from 'graphql';
import * as path from 'path';
import * as fs from 'fs';
export const appSchema = (schema: GraphQLSchema) => {
  return new Promise((resolve, reject) => {
    const content = printSchema(schema);
    fs.writeFile(path.resolve(__dirname, '../schema.gql'), content, (err) => {
        if (err) {
          console.error(err);
          reject(err);
          return
        }
        resolve(content);
        //file written successfully
      })
  })
    
}