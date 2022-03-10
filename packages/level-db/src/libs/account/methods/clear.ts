import { Store } from '@d2r/level-db'
/**
 * {@link clear} Remove all Stored Accounts
 * @returns boolean 
 */
export const clear = async () => {
    const { AccountDB } = await Store();
    await AccountDB.clear();
    return true;
}
 