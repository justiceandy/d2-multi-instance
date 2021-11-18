import createDesktopShortcut from 'create-desktop-shortcuts'
import path from 'path';
import { moduleDir } from '../../utils';
import generateBat from './generateBat';

/*
    Module Handles Creating Icon Shortcut for Service
*/
export default async function() {
    const { __dirname } = moduleDir();
    const rootPath = path.resolve(`${__dirname}/../`);

    // Create Desktop Shortcut
    const shortcutsCreated = createDesktopShortcut({
        windows: {
            filePath: path.resolve(`${rootPath}/scripts/service.bat`),
            name: 'D2R-MI Service',
            comment: 'D2R Multi Instance Service',
            icon: `${rootPath}/assets/icons/server-icon.ico`,
            arguments: '-osu -w',
            window: 'minimized',
        }
    });
  // returns true if everything worked correctly, or false if it could not create the icon or set its permissions
  return shortcutsCreated;
}