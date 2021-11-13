import { settings } from "../libs"
import registry from '../libs/registry/battle-net';
import output from './output/inject';
import d2process from "../libs/d2process";
/*
    Module Handles Inject Action from Account Launcher
        - This Runs Before D2R.exe
*/
export default async function ({ account, debug, silent = false, rotate = false }) {
    const settingsFile = await settings.get();
    const accountData = settingsFile.accounts.filter(i => i.name === account).pop();

    if(!silent) output.onStart({ accountData, settingsFile })

    if(!accountData) {
        output.onNotFound({ account, settingsFile });
        return null;
    }

    const tokens = await settings.account.getGameFolderAuth({
        folder: accountData.folder
    });

    // If this is a rotate request, validate that the process is running
    if(rotate) {
        const currentProcs = await d2process.list();
        const isRunning = currentProcs.running.filter(x => {
            return x.name === account
        }).pop();
        if(!isRunning) {
            console.log('Rotate Token Process not running');
            return false;
        }
    }

    // Stuff in the Registry
    const injected = await registry.inject({
        account: tokens.account,
        accountState: tokens.state,
        webToken: tokens.token,
        timestamp: tokens.timestamp,
        rotate,
        silent,
    });


    if(!silent) output.onSuccess({ accountData, settingsFile })

    return injected.updated;
}