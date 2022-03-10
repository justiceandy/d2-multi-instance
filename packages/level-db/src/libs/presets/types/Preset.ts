
import { Field, ObjectType, InputType } from "type-graphql";

type Ran<T extends number> = number extends T ? number :_Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;

@ObjectType({ description: "Client Settings Preset" })
@InputType("ClientSettingsInput", { description: "Client Settings Preset" })
export class ClientSettings {
  @Field()
  "Advanced Audio Preset": 0 | 1
  @Field()
  "Allow Bnet Friends Join": 0 | 1
  @Field()
  "Allow Chat": 0 | 1
  @Field()
  "Always Run": 0 | 1
  @Field()
  "Ambient Occlusion Quality": 0 | 1
  @Field()
  "Anti Aliasing": 0 | 1
  @Field()
  "Atmospherics Quality": 4
  @Field()
  "Audio AdvancedAmbient Preset 0": Ran<100>
  @Field()
  "Audio AdvancedCombat Preset 0": Ran<100>
  @Field()
  "Audio AdvancedItems Preset 0": Ran<100>
  @Field()
  "Audio AdvancedMonsters Preset 0": Ran<100>
  @Field()
  "Audio AdvancedPlayerSkills Preset 0": Ran<100>
  @Field()
  "Audio AdvancedSFX Preset 0": Ran<100>
  @Field()
  "Audio AdvancedUI Preset 0": Ran<100>
  @Field()
  "Audio AdvancedVO Preset 0": Ran<100>
  @Field()
  "Auto Gold Enabled": 0 | 1
  @Field()
  "Auto Party Invite": 0 | 1
  @Field()
  "AutoMap Centers": 0 | 1
  @Field()
  "AutoMap Party": 0 | 1
  @Field()
  "AutoMap Party Names": 0 | 1
  @Field()
  "AutoMapFade": 0 | 1
  @Field()
  "AutoMapFadeAllCustomOpacity": Ran<100>
  @Field()
  "AutoMapMode": 0 | 1
  @Field()
  "Automap Room Name and Password": 0 | 1
  @Field()
  "Aux Battle.net": string
  @Field()
  "Blended Shadows": 0 | 1
  @Field()
  "Camera Shake": 0 | 1
  @Field()
  "Character Detail": 0 | 1 | 2
  @Field()
  "Chat Background": 0 | 1
  @Field()
  "Chat Font Size": 0 | 1
  @Field()
  "Chat Gem Mode": 0 | 1
  @Field()
  "Color Blind Mode": 0 | 1
  @Field()
  "Color Blind Strength": Ran<100>
  @Field()
  "Combat Feedback": 0 | 1
  @Field()
  "Contrast": Ran<100>
  @Field()
  "Controller Cursor Speed": number
  @Field()
  "Controller Feedback": 0 | 1
  @Field()
  "Controller Rumble Enabled": 0 | 1
  @Field()
  "Controller Swap Thumbsticks": 0 | 1
  @Field()
  "Controller Weapon Swap Separate Bindings": 0 | 1
  @Field()
  "Default Key Bindings": 0 | 1
  @Field()
  "Dynamic Resolution Scaling": 0 | 1
  @Field()
  "Environment Detail": 0 | 1 | 2
  @Field()
  "First Time": 0 | 1
  @Field()
  "Framerate Cap": 0 | 1
  @Field()
  "Framerate Target": 0 | 1
  @Field()
  "Game Resolution": 0 | 1
  @Field()
  "Gamma": number
  @Field()
  "GammaHD": number
  @Field()
  "Graphic Presets": Ran<4>
  @Field()
  "Graphics Mode": 0 | 1
  @Field()
  "GreetingsSubtitles": 0 | 1
  @Field()
  "HDRContrast": number
  @Field()
  "Help Menu": 0 | 1
  @Field()
  "Item Name Display": 0 | 1
  @Field()
  "Item Tooltip Hotkey Appender": 0 | 1
  @Field()
  "Language": 0 | 1
  @Field()
  "Light Quality": 0 | 1 | 2
  @Field()
  "Lobby Allow Bnet Friends Join": 0 | 1
  @Field()
  "Lobby Difficulty": 0 | 1
  @Field()
  "Lobby Level Difference Enabled": 0 | 1
  @Field()
  "Lobby Max Difference": Ran<10>
  @Field()
  "Lobby Max Players": Ran<8>
  @Field()
  "Lobby Wide Item Drop Enabled": 1
  @Field()
  "Low Vision Mode": 0 | 1
  @Field()
  "Master Volume": Ran<100>
  @Field()
  "Max Difference": Ran<10>
  @Field()
  "Max Difference Enabled": 0 | 1
  @Field()
  "Max Players": Ran<8>
  @Field()
  "MaxLuminance": number
  @Field()
  "Mono Mode": 0 | 1
  @Field()
  "Music Volume": Ran<100>
  @Field()
  "NPC Speech": 0 | 1 | 2
  @Field()
  "NVIDIA DLSS": 0 | 1
  @Field()
  "PaperWhiteNits": number
  @Field()
  "Perspective": 0 | 1
  @Field()
  "Resolution Scale": Ran<500>
  @Field()
  "Safe Screen Percent": Ran<100>
  @Field()
  "Screen Resolution (Windowed)": string
  @Field()
  "Shadow Quality": 0 | 1
  @Field()
  "Sharpening": 0 | 1
  @Field()
  "Show Clock": 0 | 1
  @Field()
  "Show HP Text": 0 | 1
  @Field()
  "Show MP Text": 0 | 1
  @Field()
  "Skill Ammo Feedback": 0 | 1
  @Field()
  "Subtitles": 0 | 1
  @Field()
  "TTS Speed": Ran<100>
  @Field()
  "TTS Volume": Ran<100>
  @Field()
  "Text to Speech": 0 | 1
  @Field()
  "Texture Anisotropy": 0 | 1
  @Field()
  "Texture Quality": Ran<10>
  @Field()
  "Transparency Quality": Ran<10>
  @Field()
  "Tutorial": Ran<10>
  @Field()
  "User Last Online": number
  @Field()
  "VSync": 0 | 1
  @Field()
  "Verb Disable": 0 | 1
  @Field()
  "Vfx Lighting Quality": Ran<10>
  @Field()
  "VoiceLanguage": 0 | 1
  @Field()
  "Wide Item Drop Enabled": 0 | 1
  @Field()
  "Window Mode": 0 | 1
}


@ObjectType({ description: "D2R Game Client Settings Custom Preset" })
@InputType("PresetInput", { description: "D2R Game Client Settings Custom Preset" })
export class Preset {
  
  @Field({ description: "Unique ID of preset" })
  id: string;

  @Field({ description: "Name of Preset" })
  name: string;

  @Field({ description: "Client Settings" })
  settings: ClientSettings;

  @Field({ description: "Date Created" })
  created: Date;

}


