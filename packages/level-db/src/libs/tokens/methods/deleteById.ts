import { Store } from '@d2r/level-db'

/**
 * {@link deleteById} Delete a stored auth token
 * @param id D2RMA Internal ID of auth token to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { TokenDB } = await Store({});
    const deleted = await TokenDB.del(id);
    // Remove associations in Profiles
    return true;
}
