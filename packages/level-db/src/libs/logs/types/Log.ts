import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Applicaton Log" })
@InputType("LogInput", { description: "Application Log" })
export class Log {
  
  @Field({ description: "Log Id" })
  id: string;

  @Field({ description: "Log Timestamp" })
  timestamp: Date;

  @Field({ description: "Log Message" })
  message: string;

  @Field({ description: "Method that triggered Log" })
  method: string;

  @Field({ description: "Method that triggered Log" })
  type: string;

}
