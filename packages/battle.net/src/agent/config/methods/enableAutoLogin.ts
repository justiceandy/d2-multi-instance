import { ClientConfig } from '@d2r/battle.net/types';
import { ConfigFileOptions, ConfigFileDefaults } from '../libs/get';
import * as config from '../';

/*
    Module Enables Auto Login Settings
        - AutoLogin = true
        - MultipleInstances = true
        - GameLaunchWindowBehavior = 2 (Close Bnet on Game Launch)
*/
export interface AutoLoginOptions extends ConfigFileOptions {
    dir?: string
    account?: string | null
    fileName?: string
    dry?: boolean
}
const defaults : AutoLoginOptions = {
    ...ConfigFileDefaults,
    dry: false,
}
export const enableAutoLogin = async (args?:AutoLoginOptions) => {
    const params = Object.assign({}, defaults, args);
    const currentConfig = await config.get(params);
    const { Client } : { Client: ClientConfig } = currentConfig;

    if(!Client) throw('Client Settings in Config File Not Found');
    
    const configChanges = {
        AutoLogin: "true",
        SingleInstance: "false",
        GameLaunchWindowBehavior: "2",
    }

    const newConfig = Object.assign({}, currentConfig, {
        Client: Object.assign({}, Client, configChanges),
    });
    
    const updated = await config.update({
        config: newConfig,
        ...params,
    });

    return {
        config: newConfig.Client,
        dry: params.dry,
    }
}
