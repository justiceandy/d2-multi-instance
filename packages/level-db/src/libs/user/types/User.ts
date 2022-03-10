import { Field, ObjectType, Int, InputType } from "type-graphql";

@ObjectType({ description: "Application Local User Info" })
@InputType("UserInput", { description: "Application Local User Info" })
export class User {
  
  @Field({ description: "avatar image" })
  avatarImageFile: string | null;

  @Field({ description: "Api Token" })
  apiToken: string;
  
  @Field({ description: "User Subscriber Token" })
  subscriberToken: string;

  @Field({ description: "username" })
  name: string;

  @Field({ description: "Discord Id" })
  discord: string | null;

  @Field({ description: "User Rank" })
  rank: string;

  @Field({ description: "D2R Player Gold" })
  d2gold: number;

}
