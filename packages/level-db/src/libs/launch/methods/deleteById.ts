import { Store } from '@d2r/level-db'

/**
 * {@link deleteById} Delete a stored launch event by Internal ID
 * @param id D2RMA Internal ID of event to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { LaunchEventDB } = await Store({});
    const deleted = await LaunchEventDB.del(id);
    return true;
}
