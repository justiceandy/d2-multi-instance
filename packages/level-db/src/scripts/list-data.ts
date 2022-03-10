import * as libs from '..';

export const listData = async ({ filter = null}) => {
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
        libs.account.list(),
        libs.characters.list(),
        libs.launchEvents.list(),
        libs.logs.list(),
        libs.machines.list(),
        libs.marketplace.get(),
        libs.plugins.list(),
        libs.preferences.get(),
        libs.processes.list(),
        libs.profiles.list(),
        libs.stash.list(),
        libs.tokens.list(),
        libs.user.get(),
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
