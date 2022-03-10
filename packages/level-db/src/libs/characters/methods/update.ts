import { Store } from '@d2r/level-db'
import { Character } from '@d2r/level-db/types';

export type updateArgs = {
    id: 'string',
    payload: Partial<Character>,
}

/**
 * {@link update} Update a Characters Data
 * @param id D2RMA Internal Character ID
 * @param payload {@link Account} Object containing Attributes to update 
 * @returns boolean 
 */

export const update = async ({ id, payload }:updateArgs) => {
    const { CharacterDB } = await Store({});
    const currentCharacterData = CharacterDB.get(id);
    const updated = Object.assign({}, currentCharacterData, payload);
    await CharacterDB.put(id, updated);
    return true;
}

