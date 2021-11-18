import createDesktopShortcut from 'create-desktop-shortcuts'
import path from 'path';
import { moduleDir } from '../../utils';
import generateBat from './generateBat';

/*
    Module Handles Creating Icons for Account Run Batch Files
*/
export default async function({ 
    gameFolder, 
    account,
}) {
    const { __dirname } = moduleDir();
    const rootPath = path.resolve(`${__dirname}/../`);

    // Purge Existing 

    // Create Batch File
    const batchFile = await generateBat({ account, gameFolder });

    // Create Desktop Shortcut
    const shortcutsCreated = createDesktopShortcut({
        windows: {
            filePath: path.resolve(`${gameFolder}\\multi-launcher.bat`),
            name: account,
            comment: 'D2R Multi Instance Account',
            icon: `${rootPath}/assets/icons/launcher-icon.ico`,
            arguments: '-osu -w',
            window: 'minimized',
        }
    });
  // returns true if everything worked correctly, or false if it could not create the icon or set its permissions
  return shortcutsCreated;
}