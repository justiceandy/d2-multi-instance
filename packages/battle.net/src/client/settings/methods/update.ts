import { ClientSettings } from "@d2r/battle.net/types";
import { low, medium, high, ultra } from '../presets';
import { get } from './get';

import fs from 'fs/promises';
import { settingsFileLocation } from "./defaults";

export interface UpdateArgs {
    preset: 'low' | 'medium' | 'high' | 'ultra' | 'custom'| 'none'
    payload?: Partial<ClientSettings>
}
/**
 * {@link update} Update Client Settings Json File
 * 
 *  %UserProfile%\Saved Games\Diablo II Resurrected\Settings.json
 * @param preset Base Config Preset ( low | medium | high | ultra | 'custom'| 'none')
 * @param payload Additional Config to Merge into Preset (Overwrites)
 * @returns boolean 
 */
export const update = async ({ preset, payload }:UpdateArgs) => {
    const currentConfig = await get();
    let presetConfig = {};

    switch (preset) {
        case 'low':
            presetConfig = low;
            break;
        case 'medium':
            presetConfig = medium
            break;
        case 'high':
            presetConfig = high
            break;
        case 'ultra':
            presetConfig = ultra
            break;
        case 'custom':
            presetConfig = ultra
            break;
    }

    const settingsFileData = JSON.stringify(
        Object.assign({}, currentConfig, presetConfig, payload || {})
    , null, 2);

    await fs.writeFile(settingsFileLocation, settingsFileData);

    return true;
}
