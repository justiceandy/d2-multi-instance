import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Squad, SquadProfile } from '@d2r/level-db/types';


export interface createArgs {
    name: string
    profiles?: SquadProfile[]
    order?: number
}
/**
 * {@link create} Create Account Squad
 * 
 * A Squad is a group of accounts that launch together in a specific order
 * @param name Squad Name
 * @returns [{@link Squad}] 
 */

export const create = async ({
    name,
    profiles = [],
    order = 0,
}:createArgs) => {
    const { SquadDB } = await Store({});
    const id = uuidv4();
    const squadData : Squad = {
        name,
        id,
        order,
        profiles,
        created: new Date(),
    };
    const created = await SquadDB.put(id, squadData);
    
    return squadData;
}
