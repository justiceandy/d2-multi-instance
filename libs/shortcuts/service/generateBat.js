/*
    Module Handles Generating Batch Files for Account Launcher
    - This gives us a hook for application start
*/
import moduleDir from '../../utils/moduleDir';
import path from 'path';
import fs from 'fs';

export default async ({ account, gameFolder }) => {
    const { writeFile } = fs.promises;
    const { __dirname } = moduleDir(import.meta.url);
    const rootPath = path.resolve(`${__dirname}/../../../`);
    const batchTemplate = 
     `// Launch File for D2R Multi Background Service \n` +
     `npm run --prefix ${rootPath} --action account --account ${account} \n` 
     `START ${gameFolder}\\D2R.exe \n`
    ;
    return writeFile(`${gameFolder}\multi-launcher.bat`, batchTemplate);
}