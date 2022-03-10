import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Account, AccountPlugin, BattleNetTokens } from '@d2r/level-db/types';
import * as cryptor from '../libs/encrypt';

export type AccountAttributes = {
    email: string
    profiles?: string[]
    password?: string
    session?: string
    battleTag?: string
    tokens?: BattleNetTokens
}
/**
 * {@link create} Create D2RMA Battle.net Account
 * 
 * {@link AccountAttributes}:
 * @param email Battle.net email
 * @param [password] Password for Battle.net Account
 * @param [session] Pre Authenticated SessionID for Battle.net App
 * @param [battleTag] Accounts Battle Tag
 * @param [tokens] Accounts Authentication Tokens
 * @param [plugins] Active Plugins for Account
 * @returns Account
 */
export const create = async (attributes:AccountAttributes) => {
    const { AccountDB } = await Store({});
    const id = uuidv4();
    const baseAttributes = {
        id,
        password: null,
        session: null,
        battleTag: null,
        tokens: {
            ACCOUNT: null,
            ACCOUNT_STATE: null,
            ACCOUNT_TS: null,
            WEB_TOKEN: null,
        },
    };
    // Encrypt Password if it was supplied
    if(attributes.password) {
        attributes.password = await cryptor.encrypt(attributes.password);
    }
    const result:Account = Object.assign({}, baseAttributes, attributes);
    const created = await AccountDB.put(id, result);
    
    return result;
}
