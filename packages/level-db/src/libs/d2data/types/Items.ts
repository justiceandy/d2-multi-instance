import { Field, ObjectType, Int, InputType } from "type-graphql";

@ObjectType({ description: "Host Information on where Profile will execute" })
@InputType("ItemInput", { description: "Host Information on where Profile will execute" })
export class Item {

  @Field({ description: "Internal Id of Item" })
  id: string;

  
  @Field({ description: "Date item was added" })
  created: Date;

}
