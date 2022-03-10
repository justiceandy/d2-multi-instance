import { ClientSettings } from "@d2r/battle.net/types"
import fs from 'fs/promises';
import { settingsFileLocation } from "./defaults";

/**
 * {@link get} Get Current Client Settings Json File
 *  
 *  %UserProfile%\Saved Games\Diablo II Resurrected\Settings.json
 * @returns ClientSettings
 */
export const get = async () => {
    const settingsFile = await fs.readFile(settingsFileLocation);
    const settings : ClientSettings = JSON.parse(settingsFile.toString());
    return settings;
}
