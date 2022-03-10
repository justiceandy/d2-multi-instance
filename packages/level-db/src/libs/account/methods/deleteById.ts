import { Store } from '@d2r/level-db'

/**
 * {@link deleteById} Delete a stored account by Internal ID
 * @param id D2RMA Internal ID of account to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { AccountDB } = await Store({});
    const deleted = await AccountDB.del(id);
    // Remove associations in Profiles
    return true;
}
