import { get } from './get';
import { update } from './update';
/*
    Module Enables Auto Login Settings
        - AutoLogin = true
        - MultipleInstances = true
        - GameLaunchWindowBehavior = 2 (Close Bnet on Game Launch)
*/
const enableAutoLogin = async ({ dir=null, fileName = null, noExec = false }) => {
    let defaultPayload = {};

    dir ? defaultPayload.dir = dir : null;
    noExec ? defaultPayload.noExec = noExec : null;
    fileName ? defaultPayload.fileName = fileName : null;

    const currentConfig = await get({
        ...defaultPayload,
    });

    if(!currentConfig.Client){
        throw('Client Settings in Config File Not Found')
    }
    currentConfig.Client.AutoLogin = "true";
    currentConfig.Client.SingleInstance = "false";
    currentConfig.Client.GameLaunchWindowBehavior = "2";
    
    const updated = await update({
        config: currentConfig,
        ...defaultPayload,
    });

    return currentConfig
}

export {
    enableAutoLogin
}

export default enableAutoLogin