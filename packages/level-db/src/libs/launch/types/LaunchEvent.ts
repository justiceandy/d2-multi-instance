import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Game Process" })
@InputType("LaunchEventInput", { description: "Game Process" })
export class LaunchEvent {

  @Field({ 
    description: "LaunchEventID",
  })
  id: string;


  @Field({ 
    description: "Account ID",
  })
  account: string;


  @Field({ 
    description: "Timestamp Launch Event was triggered",
  })
  triggered: Date;
  
}

