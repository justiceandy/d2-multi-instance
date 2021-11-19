/*
    Module Handles Generating Batch Files for Account Launcher
    - This gives us a hook for application start
*/
import { moduleDir } from '../../utils';
import path from 'path';
import fs from 'fs/promises';

export default async ({ account, gameFolder }) => {
    const { __dirname } = moduleDir();
    const rootPath = path.resolve(`${__dirname}/../`);
    const launchScript = 'node --experimental-specifier-resolution=node --experimental-modules ./index.js --action inject'
    const batchTemplate = 
        `// Launch File for D2R Multi Launcher \n` +
        `cd /d "${rootPath}" \n`  +
        `${launchScript} --account ${account} \n` +
        `START "" "${gameFolder}\\D2R.exe" \n` +
        `Taskkill /im Battle.net.exe \n`
    ;
    return await fs.writeFile(`${gameFolder}\\multi-launcher.bat`, batchTemplate);
}