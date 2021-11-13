import fs from 'fs/promises';
import { storagePath } from '.';

export default async function() {
    const settingsFileLocation = storagePath();
    const settingsFile = await fs.readFile(settingsFileLocation);
    const settings = JSON.parse(settingsFile);
    return settings;
}
