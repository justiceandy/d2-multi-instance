import { Store } from '@d2r/level-db'


/**
 * {@link deleteById} Delete a stored Account Profile by Internal ID
 * @param id D2RMA Internal ID of account profile to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { ProfileDB } = await Store({});
    const deleted = await ProfileDB.del(id);
    // Remove associations in Profiles
    return true;
}
