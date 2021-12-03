import { get } from './get';
import { update } from './update';
/*
    Module Sets Latest account in Battle.net Config
        - Pushes account to front of array, this makes it prefill when launching
*/
const setLatestAccount = async ({ email, dir=null, fileName = null, noExec = false }) => {
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
    const accountArray = currentConfig.Client.SavedAccountNames.split(',') || [];
    const newAccountNames = accountArray.filter(i => i.toUpperCase() !== email.toUpperCase());
    currentConfig.Client.SavedAccountNames = `${email},${newAccountNames.join(',')}`;
    
    const updated = await update({
        config: currentConfig,
        ...defaultPayload,
    });

    return currentConfig
}

export {
    setLatestAccount
}

export default setLatestAccount