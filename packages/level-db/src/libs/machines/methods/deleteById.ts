import { Store } from '@d2r/level-db'

/**
 * {@link deleteById} Delete a stored machine by Internal ID
 * @param id D2RMA Internal ID of machine to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { MachineDB } = await Store({});
    const deleted = await MachineDB.del(id);
    // Remove associations in Profiles
    return true;
}
