import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { 
    Profile, 
    GameClientOptions, 
    GameWindowOptions, 
    GlobalHotkeyConfig,
    BattleNetConfig,
    ProfileHost,
} from '@d2r/level-db/types';
import { defaults } from './defaults';
import * as account from '../../account'
/*
    Module Creates a Game Account Profile 
*/
export interface createProfileArgs {
    name: string;
    client: GameClientOptions;
    order?: number;
    host?: ProfileHost;
    window?: GameWindowOptions;
    hotkey?: GlobalHotkeyConfig;
    battlenet?: BattleNetConfig;
}

/**
 * {@link create} Creates a new Account Profile. 
 * 
 * These are Runtime Config options of an Account.
 * @param name Display Name of Profile
 * @param client Client Settings {@link GameClientOptions}
 * @param order Optional Profile Display Order (Defaults to n+1)
 * @param host Optional Host Settings (Defaults to Local) {@link ProfileHost}
 * @param window Optional Window Settings {@link GameWindowOptions}
 * @param hotkey Optional Hotkey Settings {@link GlobalHotkeyConfig}
 * @param battlenet Optional Battle.net Account {@link BattleNetConfig}
 * @returns Promise<Process>
 */

export const create = async (args:createProfileArgs) => {
    const { ProfileDB, AccountDB } = await Store();
    const id = uuidv4();
    const profile:Profile = Object.assign({
        id,
        creationDate: new Date(),
    }, defaults(args), args);
    
    const created = await ProfileDB.put(id, profile);

    // If we have Battle.net Profile
    // if(profile.battlenet){
    //     const accountId = profile.battlenet.account;
        
    //     // if We have account, add this profile
    //     if(accountId) {
    //         const currentAccount = await account.get({
    //             filter: 'id',
    //             filterValue: accountId,
    //         });
    //         const accountPlugins = currentAccount.plugins;
    //               accountPlugins.push(id);

    //         await account.update({
    //             id: accountId,
    //             payload: {
    //                 plugins: accountPlugins,
    //             }
    //         });
    //     }
    // }

    return profile;
}
