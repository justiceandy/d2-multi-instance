import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Marketplace Plugin" })
@InputType("PluginInput", { description: "Marketplace Plugin" })
export class Plugin {
  
  @Field({ description: "Plugin Enabled in Marketplace" })
  enabled: true;

  @Field({ description: "Name of Plugin" })
  name: string;

  @Field({ description: "About Plugin" })
  description: string;

  @Field({ description: "Default Configuration Object" })
  defaultConfiguration: object;

  @Field({ description: "Developer Name/Alias" })
  developer: string;

  @Field({ description: "Discord for Plugin Support" })
  discord: string;

  @Field({ description: "If plugin is only availble for premium members" })
  premium: boolean;
}
