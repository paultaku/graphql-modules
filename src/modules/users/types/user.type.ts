import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  
  @Field(type => ID)
  id!: number;

  @Field(type => String)
  email!: string;

  @Field(type => String)
  password!: string;

  @Field(type => String, { nullable: true })
  description?: string;

}