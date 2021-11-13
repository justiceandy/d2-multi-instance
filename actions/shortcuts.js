import { settings, shortcuts } from '../libs';
/*
    Module Handles Regenerating Desktop Shortcuts
*/
export default async (args) => {
    console.log('Generate Me some Shortcuts')
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
  
