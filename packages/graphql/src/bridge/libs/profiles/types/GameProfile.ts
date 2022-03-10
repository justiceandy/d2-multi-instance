import { Field, ObjectType, Int, InputType } from "type-graphql";

@ObjectType({ description: "Battlenet Config for Account Profile" })
@InputType("BattleNetConfigInput", { description: "Battlenet Config for Account Profile" })
export class BattleNetConfig {

  @Field({ 
    description: "Battlenet Region",
    defaultValue: 'NA',
  })
  region: string;

  @Field({ 
    description: "Battlenet AccountID Associated with Profile",
    defaultValue: '',
    nullable: true
  })
  account: string | null;

  @Field({ 
    description: "Language Local",
    defaultValue: 'EN'
  })
  local: string;

  @Field({ 
    description: "Automation Toggle Override for Profile",
    defaultValue: true,
  })
  automated: boolean;

  @Field({ 
    description: "Offline only. Profile should never be connected to battle.net",
    defaultValue: false
  })
  offlineOnly: boolean;

}

@ObjectType({ description: "Game Client Lifecycle event" })
@InputType("GameClientLifecycleEventInput", { description: "Game Client Lifecycle event" })
export class GameClientLifecycleEvent {
  @Field({ description: "Type of Event" })
  type: string;
  @Field({ description: "Source of Event. Local or Remote HTTP Endpoint" })
  source: string;
  @Field({ description: "Payload to send with event" })
  payload: string;
}

@ObjectType({ description: "Game Client Config for Account Profile" })
@InputType("GameClientOptionsInput", { description: "Game Client Config for Account Profile" })
export class GameClientOptions {
  @Field({ description: "D2R Game Folder Location" })
  folder: string;
  @Field({ description: "Type of Executable (D2R or Custom)" })
  exeType: string;
  @Field({ description: "Setting for using Skip Intro method" })
  skipIntro: boolean;
  @Field({ description: "Setting for if automation should wait in que" })
  waitInQue: boolean;
  @Field({ description: "FancyZones Config", nullable: true })
  pre: GameClientLifecycleEvent | null;
  @Field({ description: "Post Launch Event", nullable: true  })
  post: GameClientLifecycleEvent | null;
}

@ObjectType({ description: "FancyZones Config for Account Profile" })
@InputType("FancyZonesWindowOptionsInput", { description: "FancyZones Config for Account Profile" })
export class FancyZonesWindowOptions {
  @Field({ description: "FancyZones Config" })
  enabled: boolean;
}

@ObjectType({ description: "Game Window Options for Account Profile" })
@InputType("GameWindowOptionsInput", { description: "Game Window Options for Account Profile" })
export class GameWindowOptions {
  @Field({ description: "FancyZones Config" })
  fancyZones: FancyZonesWindowOptions;
}

@ObjectType({ description: "Global Keybinds for Account Profile" })
@InputType("GlobalHotkeyConfigInput", { description: "Global Keybinds for Account Profile" })
export class GlobalHotkeyConfig {
  @Field({ description: "Feature Enabled for Profile" })
  enabled: boolean;
  @Field({ description: "Super used in combination. (Control etc)", nullable: true })
  modifier: string | null;
  @Field({ description: "Alphabet Key/Number", nullable: true })
  key: string | null;
}

@ObjectType({ description: "Profile Configuration when run in a Squad" })
@InputType("SquadMemberConfigInput", { description: "Profile Configuration when run in a Squad" })
export class SquadMemberConfig {
  @Field({ description: "Include in Runtime for Squad Profile" })
  enabled?: boolean;
  @Field({ description: "ID for Squad" })
  squad?: string;
  @Field(type => Int, { description: "Profile Order" })
  order: number;
}

@ObjectType({ description: "Host Information on where Profile will execute" })
@InputType("ProfileHostInput", { description: "Host Information on where Profile will execute" })
export class ProfileHost {

  
  @Field({ description: "Host IP. (Defaults to local)" })
  host?: string;
}

@ObjectType({ description: "Profile Data for Launching D2R with a Battle.net Account" })
@InputType("GameProfileInput", { description: "Profile Config Input Parameters" })
export class GameProfile {

  @Field({ description: "Unique ID" })
  id: string;

  @Field({ description: "Display Name of Profile" })
  name: string;

  @Field({ description: "Game Folder for D2R.exe" })
  folder?: string;

  @Field(type => Int, { description: "Profile Position in Local List" })
  order?: number;

  @Field({ description: "Creation Date for Profile" })
  creationDate?: Date;

  @Field({ description: "Host Information for Profile Runtime" })
  host?: ProfileHost;

  @Field({ description: "D2R Client Configuration" })
  client?: GameClientOptions;

  @Field({ description: "D2R Game Window Options" })
  window?: GameWindowOptions;

  @Field({ description: "D2R Gloabal Hotkey Options" })
  hotkey?: GlobalHotkeyConfig;


  @Field({ description: "D2R Gloabal Hotkey Options" })
  battlenet?: BattleNetConfig;
}
