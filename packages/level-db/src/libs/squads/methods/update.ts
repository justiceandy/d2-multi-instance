import { Store } from '@d2r/level-db'
import { Squad } from '@d2r/level-db/types';


export type updateSquadArgs = {
    id: string,
    payload: Partial<Squad>,
    merge: boolean,
}

/**
 * {@link update} Update a Squads Data Record
 * @param id D2RMA Internal ID
 * @param payload {@link Squad} Object containing Attributes to update 
 * @param merge If Merging current Squad Data with Included Payload
 * @returns boolean 
 */
export const update = async ({ id, payload, merge = true }:updateSquadArgs) => {
    const { SquadDB } = await Store();
    if(merge){
        const currentSquadData = SquadDB.get(id);
        const updated = Object.assign({}, currentSquadData, payload);
        await SquadDB.put(id, updated);
    }
    if(!merge){
        await SquadDB.put(id, payload);
    }
    return true;
}

