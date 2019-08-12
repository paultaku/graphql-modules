import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number | string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  name: string;

  @Field(type => String,{ nullable: true })
  password?: string;

}