import { Field, ObjectType, Int, InputType } from "type-graphql";

@ObjectType({ description: "Item in Characters inventory" })
@InputType("StashItemInput", { description: "Item in Characters inventory" })
export class StashItem {
  
  @Field({ description: "Unique Internal ID" })
  itemId: string;

  @Field({ description: "Date Character Looted Item" })
  created: Date;

}
