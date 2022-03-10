import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Game Process" })
@InputType("ProcessInput", { description: "Game Process" })
export class Process {
  @Field({ 
    description: "Process ID",
  })
  processId: string | null;
  
  @Field({ 
    description: "Account ID",
  })
  account: string | null;

  @Field({ 
    description: "Account ID",
  })
  created: Date;
  
  @Field({ 
    description: "Account ID",
  })
  refresh: Date;

  @Field({ 
    description: "Number of Token Refresh Events", defaultValue: 0,
  })
  refreshCount: number;
}

