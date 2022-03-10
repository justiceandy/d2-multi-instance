import { Field, ObjectType, Int, InputType } from "type-graphql";


@ObjectType({ description: "Item in Characters inventory" })
@InputType("SquadProfileInput", { description: "Item in Characters inventory" })
export class SquadProfile {
  
  @Field({ description: "Account Profile Id" })
  profileId: string;

  @Field({ description: "Date Character Looted Item" })
  order: number;

  @Field({ description: "Client Machine Profile will run on" })
  machineId: string;

}


@ObjectType({ description: "Item in Characters inventory" })
@InputType("SquadInput", { description: "Item in Characters inventory" })
export class Squad {

  @Field({ description: "Unique Internal ID" })
  id: string
  
  @Field({ description: "Squad Display Name" })
  name: string;

  @Field({ description: "Squad Order", defaultValue: 0 })
  order: number;

  @Field({ description: "Timestamp Squad was created" })
  created: Date;

  @Field({ description: "Profiles in Squad", defaultValue: [] })
  profiles: SquadProfile[];

}
