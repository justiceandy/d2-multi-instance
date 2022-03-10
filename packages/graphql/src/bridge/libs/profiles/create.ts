import { v4 as uuidv4 } from 'uuid';
import { Store } from '../store'
import { 
    GameProfile, 
    GameClientOptions, 
    GameWindowOptions, 
    GlobalHotkeyConfig,
    ProfileHost,
} from './types/GameProfile';

/*
    Module Creates a Game Account from supplied attributes and stores it in Database
*/

export interface createProfileArgs {
    name: string;
    folder: string;
    order?: number;
    host?: ProfileHost;
    client?: GameClientOptions;
    window?: GameWindowOptions;
    hotkey?: GlobalHotkeyConfig;
}

export const defaults = (attributes:createProfileArgs) => ({
    host: {
        host: 'localhost'
    },
    client: {
        folder: attributes.folder,
        exeType: 'D2R.exe',
        skipIntro: true,
        waitInQue: true,
        pre: null,
        post: null
    },
    window: {
        fancyZones: {
            enabled: false,
        }
    },
    hotkey: {
        enabled: false,
        modifier: null,
        key: null,
    },
})

export const create = async (attributes:createProfileArgs) => {
    const { Accounts } = await Store({});
    const id = uuidv4();
    const profile:GameProfile = {
        id,
        creationDate: new Date(),
        ...attributes,
        ...defaults(attributes),
    };
    const created = await Accounts.put(id, profile);
    return created;
}
