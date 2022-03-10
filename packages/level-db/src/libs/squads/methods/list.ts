import { Store } from '@d2r/level-db'
import { Squad } from '@d2r/level-db/types';


/**
 * {@link list} List all Account Squads
 * @returns [{@link Squad}] 
 */
export const list = async () => {
    const { SquadDB } = await Store({});
    const items : Squad[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of SquadDB.iterator() ) {
       const itemData : Squad = value;
       items.push(itemData);
    }
    return items
}
 