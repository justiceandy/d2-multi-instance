import { settings } from "../libs"
import registry from '../libs/registry/battle-net';
import output from './output/inject';

/*
    Module Handles Inject Action from Account Launcher
        - This Runs Before D2R.exe
*/
export default async function ({ account, debug }) {
    const settingsFile = await settings.get();
    const accountData = settingsFile.accounts.filter(i => i.name === account).pop();

    output.onStart({ accountData, settingsFile })

    if(!accountData) {
        output.onNotFound({ account, settingsFile });
        return null;
    }

    const tokens = await settings.account.getGameFolderAuth({
        folder: accountData.folder
    });

    // Stuff in the Registry
    const injected = await registry.inject({
        account: tokens.account,
        accountState: tokens.state,
        webToken: tokens.token,
        timestamp: tokens.timestamp,
    });

    output.onSuccess({ accountData, settingsFile })

    return true;
}