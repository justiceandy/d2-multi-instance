import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType({ description: "Game Account Plugin Settings" })
@InputType("AccountPluginInput", { description: "Game Account Plugin Settings" })
export class AccountPlugin {
  
  @Field({ description: "Plugin Id" })
  pluginId: string;

  @Field({ description: "Status" })
  active: boolean;

  // @Field({ description: "Plugin Configuration for Account" })
  // configuration: any;

}


@ObjectType({ description: "Auth Tokens for Account Profile" })
@InputType("BattleNetTokensInput", { description: "Auth Tokens for Account Profile" })
export class BattleNetTokens {

  @Field({ 
    description: "OSI/ACCOUNT Registry Key",
    defaultValue: '', 
  })
  ACCOUNT: string | null;

  @Field({ 
    description: "OSI/ACCOUNT_STATE Registry Key",
    defaultValue: '', 
  })
  ACCOUNT_STATE: string | null;

  @Field({ 
    description: "OSI/ACCOUNT_TS Registry Key",
    defaultValue: '', 
  })
  ACCOUNT_TS: string | null;

  @Field({ 
    description: "OSI/WEB_TOKEN Registry Key",
    defaultValue: '', 
  })
  WEB_TOKEN: string | null;
}


@ObjectType({ description: "Attributes about a Game Account" })
@InputType("AccountInput", { description: "Attributes about a Game Account" })
export class Account {
  
  @Field({ description: "Unique ID for Game Account" })
  id: string;

  @Field({ description: "Email for Battlenet Account" })
  email: string;

  @Field({ description: "Password for Battlenet Account" })
  password: string;

  @Field({ description: "SessionID to use with Blizzard Launcher" })
  session: string;

  @Field({ description: "Battle Tag of Account" })
  battleTag: string;

  @Field(type => [AccountPlugin], { description: "Plugins Attached to Game Account" })
  plugins?: AccountPlugin[];

  @Field({ 
    description: "Battlenet Auth Tokens captured from windows registry",
    defaultValue: {}
  })
  tokens?: BattleNetTokens;

}
