import { Store } from '@d2r/level-db'
import { Preferences } from '@d2r/level-db/types';

/**
 * {@link deleteById} Delete a stored Plugin by Internal ID
 * @param id D2RMA Internal ID of Plugin to delete
 * @returns boolean 
 */
 export const deleteById = async (id:string) => {
    const { PluginDB } = await Store();
    const deleted = await PluginDB.del(id);
    return true;
}
