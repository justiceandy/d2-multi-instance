import { Store } from '@d2r/level-db'
import { Account } from '@d2r/level-db/types';

export type updateAccountArgs = {
    id: string,
    payload: Partial<Account>,
}

/**
 * {@link update} Update an Accounts Data
 * @param id D2RMA Internal ID
 * @param payload {@link Account} Object containing Attributes to update 
 * @returns boolean 
 */
export const update = async ({ id, payload }:updateAccountArgs) => {
    const { AccountDB } = await Store({});
    const currentAccountData = AccountDB.get(id);
    const updated = Object.assign({}, currentAccountData, payload);
    await AccountDB.put(id, updated);
    return true;
}

