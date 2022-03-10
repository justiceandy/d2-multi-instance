import { Field, ObjectType, InputType } from "type-graphql";
import { Plugin } from "../../plugins/types/Plugin";

@ObjectType({ description: "Marketplace Configuration" })
@InputType("MarketplaceInput", { description: "Marketplace Configuration" })
export class Marketplace {
  
  @Field({ description: "Windows Process Id" })
  enabled: boolean;

  @Field({ description: "Marketplace Version" })
  version: string;

  @Field({ description: "Plugins Available in Marketplace" })
  featured: Plugin[];

  @Field({ description: "Plugins Available in Marketplace" })
  plugins: Plugin[];
  
}
