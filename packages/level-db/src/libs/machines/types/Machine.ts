import { Field, ObjectType, Int, InputType } from "type-graphql";

@ObjectType({ description: "Host Information on where Profile will execute" })
@InputType("MachineInput", { description: "Host Information on where Profile will execute" })
export class Machine {

  @Field({ description: "Id " })
  id: string;

  @Field({ description: "Host IP. (Defaults to local)" })
  host: string;

  @Field({ description: "Timestamp Machine was created" })
  created: Date;
}
