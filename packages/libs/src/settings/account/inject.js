import { settings, d2process, registry } from "../../"

/*
    Module Handles Injecting Account Creds into Registry
*/
export default async function ({ account, debug, rotate = false }) {
    const{ battleNet } = registry;
    const settingsFile = await settings.get();
    const accountData = settingsFile.accounts.filter(i => i.name === account).pop();

    if(!accountData) return null;

    const tokens = await settings.account.getGameFolderAuth({
        folder: accountData.folder
    });

    // If this is a rotate request, validate that the process is running
    if(rotate) {
        const currentProcs = await d2process.list();
        const isRunning = currentProcs.running.filter(x => {
            return x.name === account
        }).pop();
        if(!isRunning) return null;
    }

    // Stuff in the Registry
    const injected = await battleNet.inject({
        account: tokens.account,
        accountState: tokens.state,
        webToken: tokens.token,
        timestamp: tokens.timestamp,
        rotate,
        silent,
    });

    return injected.updated;
}