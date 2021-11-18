/*
    Module Handles Generating Batch Files for Account Launcher
    - This gives us a hook for application start
*/
import { moduleDir } from '@d2r/cli/dist/utils';
import path from 'path';
import fs from 'fs';

export default async ({ account, gameFolder }) => {
    const { writeFile } = fs.promises;
    const { __dirname } = moduleDir();
    const rootPath = path.resolve(`${__dirname}/../`);
    const batchTemplate = 
     `// Launch File for D2R Multi Background Service \n` +
     `npm run --prefix ${rootPath} --action service \n` 
     `START ${gameFolder}\\D2R.exe \n`
    ;
    return writeFile(`${gameFolder}\multi-launcher.bat`, batchTemplate);
}