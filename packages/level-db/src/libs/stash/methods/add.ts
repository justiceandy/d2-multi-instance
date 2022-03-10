import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { StashItem } from '@d2r/level-db/types';

/**
 * {@link add} Add D2R Item to Stash
 * @returns [{@link StashItem}] 
 */
export type itemAttributes = {
   
}
export const add = async (attributes:itemAttributes) => {
    const { StashDB } = await Store({});
    const itemId = uuidv4();
    const baseAttributes : Partial<StashItem> = {
        itemId,
        created: new Date(),
    };
    const logData = <StashItem> Object.assign({}, baseAttributes, attributes);
    const created = await StashDB.put(itemId, logData);
    return created;
}
