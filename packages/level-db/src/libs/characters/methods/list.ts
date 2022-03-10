import { Store } from '@d2r/level-db'
import { Character } from '@d2r/level-db/types';

/**
 * {@link list} List all Stored Characters
 * @returns [{@link Character}] 
 */
export const list = async () => {
    const { CharacterDB } = await Store({});
    const characters : Character[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of CharacterDB.iterator() ) {
       const characterData : Character = value;
       characters.push(characterData);
    }
    return characters
}
 