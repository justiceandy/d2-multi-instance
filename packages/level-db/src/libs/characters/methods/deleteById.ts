import { Store } from '@d2r/level-db'

/**
 * {@link deleteById} Delete a Character by Internal ID
 * @param id D2RMA Internal ID of character to delete
 * @returns boolean 
 */
export const deleteById = async (id:string) => {
    const { CharacterDB } = await Store();
    const deleted = await CharacterDB.del(id);
    return true;
}
