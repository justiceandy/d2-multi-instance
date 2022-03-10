import { Store } from '@d2r/level-db'

/**
 * {@link remove} Remove a Preset Item by Unique ID
 * @param id D2RMA Internal ID of item
 * @returns boolean 
 */
export const remove = async (id:string) => {
    const { PresetDB } = await Store();
    const deleted = await PresetDB.del(id);
    // Remove associations in Profiles
    return true;
}
