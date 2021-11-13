import fs from 'fs/promises';
import settings from '..';
import { storagePath } from '..';
import path from 'path';

/*  
    Module Handles Updating Account Store in Settings.json
*/
export default async function ({ name, tokens }) {
    const settingsFileLocation = storagePath();
    const settingsFile = await settings.get();

    settingsFile.accounts.map((act, i) => {
        if(act.name === name) settingsFile.accounts[i].tokens = tokens;
    });
    return await fs.writeFile(settingsFileLocation, JSON.stringify(settingsFile, null, 2));
}

