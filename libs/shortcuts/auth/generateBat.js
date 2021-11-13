/*
    Module Handles Generating Batch Files for Account Launcher
    - This gives us a hook for application start
*/
import moduleDir from '../../utils/moduleDir';
import path from 'path';
import fs from 'fs/promises';

export default async ({ account, gameFolder }) => {
    const { __dirname } = moduleDir(import.meta.url);
    const rootPath = path.resolve(`${__dirname}/../../../../`);
    const batchTemplate = 
        `// Launch File for D2R Multi Launcher \n` +
        `cd /d "${rootPath}" \n`  +
        `node --experimental-specifier-resolution=node --experimental-modules ./index.js --action inject --account ${account} \n` +
        `START "" "${gameFolder}\\D2R.exe" \n`
    ;
    return await fs.writeFile(`${gameFolder}\\multi-launcher.bat`, batchTemplate);
}