import * as config from '../';
import { ConfigFileOptions, ConfigFileDefaults } from '../libs/get';
/*
    Module Sets Latest account in Battle.net Config
        - Pushes account to front of array, this makes it prefill when launching
*/
export interface SetLatestArgs extends ConfigFileOptions {
    email: string
    dry?: boolean
}
const defaults : Partial<SetLatestArgs> = {
    ...ConfigFileDefaults,
    dry: false,
}
export const setLatestAccount = async (args:SetLatestArgs) => {
    const params : SetLatestArgs = Object.assign({}, defaults, args);
    const currentConfig = await config.get(params);

    const { email } = params;
    const { Client } = currentConfig;

    if(!Client) throw('Client Settings in Config File Not Found');

    const accounts : string[] = Client.SavedAccountNames.split(',') || [];

    const otherAccounts : string[] = accounts.filter(
        account => account.toUpperCase() !== email.toUpperCase()
    );

    const configChanges = { 
        SavedAccountNames: `${email},${otherAccounts.join(',')}` 
    };

    const newConfig = Object.assign({}, currentConfig, {
        Client: Object.assign({}, Client, configChanges),
    });

    const updated = await config.update({
        config: newConfig,
        ...params,
    });

    return {
        config: newConfig,
        dry: params.dry,
    }
}
