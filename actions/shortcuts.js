import { settings, shortcuts } from '../libs';
/*
    Module Handles Regenerating Desktop Shortcuts
*/
export default async (args) => {
    console.log('Generating Shortcuts')
    const settingsFile = await settings.get();

    // Generate Launcher Shortcut Per Account
    await Promise.all(settingsFile.accounts.map(
        ({ name, display, folder }) => shortcuts.launcher.create({ account: name, displayName: display, gameFolder: folder })
    ));
    
    // Generate Service Icon
    const serviceLauncher = await shortcuts.service.create();
    // Auth Shortcut

    await Promise.all(settingsFile.accounts.map(
        ({ name, folder, display }) => shortcuts.auth.create({ account: name, displayName: display, gameFolder: folder })
    ));

    return true;


}
  
