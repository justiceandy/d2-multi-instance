import { Store } from '@d2r/level-db'
import { StashItem } from '@d2r/level-db/types';


/**
 * {@link list} List all Stash items
 * @returns [{@link StashItem}] 
 */
export const list = async () => {
    const { StashDB } = await Store({});
    const items : StashItem[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of StashDB.iterator() ) {
       const itemData : StashItem = value;
       items.push(itemData);
    }
    return items
}
 