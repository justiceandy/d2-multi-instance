import { Store } from '@d2r/level-db'
import { LaunchEvent } from '@d2r/level-db/types';

export type updateAccountArgs = {
    id: 'string',
    payload: Partial<LaunchEvent>,
}

/**
 * {@link update} Update a Launch Event Record
 * @param id D2RMA Internal ID
 * @param payload {@link LaunchEvent} Object containing Attributes to update 
 * @returns boolean 
 */
export const update = async ({ id, payload }:updateAccountArgs) => {
    const { LaunchEventDB } = await Store({});
    const currentEventData = LaunchEventDB.get(id);
    const updated = Object.assign({}, currentEventData, payload);
    await LaunchEventDB.put(id, updated);
    return true;
}

