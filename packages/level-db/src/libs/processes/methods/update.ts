import { Store } from '@d2r/level-db'
import { Process } from '@d2r/level-db/types';

export type updateAccountArgs = {
    id: 'string',
    payload: Partial<Process>,
}

/**
 * {@link update} Update Game Process Record
 * @param id D2RMA ID for Process. not PID
 * @param payload Attributes to change. {@link  Process}
 * @returns Promise<Process>
 */
export const update = async ({ id, payload }:updateAccountArgs) => {
    const { ProcessDB } = await Store({});
    const currentProcessData = ProcessDB.get(id);
    const updated = Object.assign({}, currentProcessData, payload);
    await ProcessDB.put(id, updated);
    
    return updated;
}

