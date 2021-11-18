import fs from 'fs/promises';
import settings from '..';
import path from 'path';

/*  
    Module Handles Updating General Preferences in Settings.json
*/
export default async function ({ attribute, value }) {
    const settingsFileLocation = settings.storagePath();
    const settingsFile = await settings.get();

    settingsFile[attribute] = value;
    
    return await fs.writeFile(settingsFileLocation, JSON.stringify(settingsFile, null, 2));
}

