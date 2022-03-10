import { list } from './list';
import { Character, CharacterProgress } from '@d2r/level-db/types';
import { Store } from '@d2r/level-db'

export type getCharacterArgs = {
    filter: 'id' | 'item' | 'progress' | 'name' | 'class' | 'core',
    filterValue: string,
    multiple?: boolean,
}

/**
 * {@link get} Get Character(s) by Filter Criteria.
 * {@link getCharacterArgs} Params:
 * @param filter 'id' | 'item' | 'progress' | 'name' | 'class' | 'core'
 * @param filterValue Attribute Value to Filter On
 * @param multiple Boolean to return either array of characters or first character found.
 * @returns {Account} Character || Character[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getCharacterArgs) => {
    const characters = await list();
    const { CharacterDB } = await Store();
    let filtered = [];
    
    switch (filter){
        case 'id': {
            const item = await CharacterDB.get(filterValue);
            return item;
         }
        case 'core':{
            filtered = characters.filter(({ core }:Partial<Character>) => core === filterValue);
            break;
        }
        case 'name':{
            filtered = characters.filter(({ name }:Partial<Character>) => name === filterValue);
            break;
        }
        case 'class':{
            filtered = characters.filter((c:Partial<Character>) => c.class === filterValue);
            break;
        }
        case 'progress':{
            filtered = characters.filter(({ 
                progress = {
                    difficulty: null,
                    act: null,
                },
            }: Partial<Character> ) => {
                const charProgress : CharacterProgress = progress;
                const { difficulty, act } = charProgress;
                return difficulty === filterValue || act === filterValue;
            })
            break;
        }
        default: {
            filtered = characters.filter(({ id }:Partial<Character>) => id === filterValue);
            break;
         }
    }

    return multiple ? filtered : filtered.pop();
}
 

