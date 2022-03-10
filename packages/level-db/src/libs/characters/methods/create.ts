import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Character, CharacterProgress } from '@d2r/level-db/types';

/*
    Module Creates a Game Account from supplied attributes and stores it in Database
*/
export type CharacterAttributes = {
    class: string,
    name: string,
    core?: string,
    level?: string,
    progress?: CharacterProgress,
}

/**
 * {@link create} Create D2R Character Record
 * 
 * {@link AccountAttributes}:
 * @param class Character Class
 * @param name Character Name
 * @param [core] Core (Soft|Hard)
 * @param [level] Character Level
 * @param [progress] Character Progress
 * @returns Account
 */
export const create = async (attributes:CharacterAttributes) => {
    const { CharacterDB } = await Store();
    const id = uuidv4();
    const baseAttributes : Partial<Character> = {
        id,
        core: null,
        progress: {
            act: null,
            difficulty: null,
        },
    };
    const character = <Character> Object.assign({}, baseAttributes, attributes);
    const created = await CharacterDB.put(id, character);
    return created;
}
