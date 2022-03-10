import { Store } from '@d2r/level-db'
import { Preset } from '@d2r/level-db/types';


/**
 * {@link list} List all Client Setting Presets
 * @returns [{@link Preset}] 
 */
export const list = async () => {
    const { PresetDB } = await Store({});
    const items : Preset[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of PresetDB.iterator() ) {
       const itemData : Preset = value;
       items.push(itemData);
    }
    return items
}
 