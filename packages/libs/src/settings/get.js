import fs from 'fs/promises';

export default async function() {
    const settingsFile = await fs.readFile(__dirname + '/../../settings.json');
    const settings = JSON.parse(settingsFile);
    return settings;
}
