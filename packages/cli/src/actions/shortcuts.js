import { settings } from '@d2r/libs';
import shortcuts from '../shortcuts'
/*
    Module Handles Regenerating Desktop Shortcuts
*/
export default async (args) => {
    console.log('Generating Shortcuts for CLI')
    const settingsFile = await settings.get();
    // Generate Launcher Shortcut Per Account
    await Promise.all(settingsFile.accounts.map(
        ({ name, folder }) => shortcuts.launcher.create({ account: name, gameFolder: folder })
    ));
    // Generate Service Icon
    const serviceLauncher = await shortcuts.service.create();
    // Auth Shortcut
    const loginScript = await shortcuts.auth.create();
    return true;
}
  
