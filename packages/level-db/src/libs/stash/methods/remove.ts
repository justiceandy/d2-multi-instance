import { Store } from '@d2r/level-db'

/**
 * {@link remove} Remove an Item from Stash by Internal Id
 * @param id D2RMA Internal ID of item
 * @returns boolean 
 */
export const remove = async (id:string) => {
    const { StashDB } = await Store({});
    const deleted = await StashDB.del(id);
    // Remove associations in Profiles
    return true;
}
