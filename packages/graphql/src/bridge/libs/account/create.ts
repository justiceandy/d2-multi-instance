import { v4 as uuidv4 } from 'uuid';
import { Store } from '../store'
import { GameAccount } from './types/GameAccount';

/*
    Module Creates a Game Account from supplied attributes and stores it in Database
*/
export const create = async (attributes:Partial<GameAccount>) => {
    const { Accounts } = await Store({});
    const id = uuidv4();
    const baseAttributes = {
        id,
        profiles: [],
        password: null,
        session: null,
        battleTag: null,
        plugins: [],
        tokens: {
            ACCOUNT: null,
            ACCOUNT_STATE: null,
            ACCOUNT_TS: null,
            WEB_TOKEN: null,
        },
    };
    const merged:GameAccount = Object.assign({}, baseAttributes, attributes);
    const created = await Accounts.put(id, merged);
    return created;
}
