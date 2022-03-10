import * as libs from '..';

export const clearData = async ({ filter = null}) => {
    const [
        accounts, 
        characters, 
        launchEvents,
        logs, 
        machines, 
        marketplace, 
        plugins, 
        preferences, 
        processes,
        profiles,
        stash, 
        tokens,
        user
    ] = await Promise.all([
        libs.account.clear(),
        libs.characters.clear(),
        libs.launchEvents.clear(),
        libs.logs.clear(),
        libs.machines.clear(),
        libs.marketplace.clear(),
        libs.plugins.clear(),
        libs.preferences.clear(),
        libs.processes.clear(),
        libs.profiles.clear(),
        libs.stash.clear(),
        libs.tokens.clear(),
        libs.user.clear(),
    ])

    const result = {
        accounts, 
        characters, 
        launchEvents,
        logs, 
        machines, 
        marketplace, 
        plugins, 
        preferences, 
        processes,
        profiles,
        stash, 
        tokens,
        user
    }
    if(filter && result[filter]) {
        return result[filter];
    }

    return result;
}
