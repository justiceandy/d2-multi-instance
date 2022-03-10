import { Field, ObjectType, Int, InputType } from "type-graphql";


@ObjectType({ description: "Application API Configuration" })
@InputType("AppAPIInput", { description: "Application API Configuration" })
export class AppAPI {
  
  @Field({ description: "Application API Exposed to Local Network" })
  enabled: boolean;

  @Field({ description: "Port Number API is exposed on" })
  port: number;

  @Field({ description: "Token for Authenticating with this API", nullable: true })
  apiKey: string | null;

}

@ObjectType({ description: "Application API Configuration" })
@InputType("KernelDriverInput", { description: "Application API Configuration" })
export class KernelDriver {
  
  @Field({ description: "If Kernel Driver is installed" })
  installed: boolean;

  @Field({ description: "Version Number of Kernel Driver", nullable: true })
  version: string | null;

}


@ObjectType({ description: "Application API Configuration" })
@InputType("GlobalProfileSettingsInput", { description: "Application API Configuration" })
export class GlobalProfileSettings {

  @Field({ description: "Override individual profile settings" })
  override: boolean;
  
  @Field({ description: "Automated Login Enabled" })
  automatedLogin: boolean;

  @Field({ description: "Default Region" })
  region: string;

  @Field({ description: "Default Local" })
  local: string;

}


@ObjectType({ description: "Application Preferences" })
@InputType("PreferencesInput", { description: "Application Preferences" })
export class Preferences {
  
  @Field({ description: "Hash of Application Lock Password", nullable: true })
  lockPassword: string | null;

  @Field({ description: "Start Application in Tray Mode" })
  startMinimized: boolean;

  @Field({ description: "If User has gone through onboarding experience" })
  onboarded: boolean;

  @Field({ description: "Enable Discord Notifications" })
  notifications: boolean;

  @Field({ description: "Directory for Generated Account Shortcuts" })
  shortcutDirectory: string;

  @Field({ description: "Change Window Titles" })
  changeWindowTitles: boolean;

  @Field({ description: "Enable Automatic Updates" })
  automatedUpdates: boolean;

  @Field({ description: "Enable Verbose Logging" })
  debugMode: boolean;

  @Field({ description: "Default Account Settings" })
  globalProfileSettings: GlobalProfileSettings;

  @Field({ description: "Kernel Driver Settings" })
  kernelDriver: KernelDriver;

  @Field(type => AppAPI, { description: "App API Settings" })
  api: AppAPI;
}
