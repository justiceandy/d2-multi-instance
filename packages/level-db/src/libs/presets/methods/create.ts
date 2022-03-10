import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { ClientSettings, Preset } from '@d2r/level-db/types';

/**
 * {@link create} Create a Client Settings Preset
 * @param name Display Name of Preset
 * @param settings Client Settings
 * @returns [{@link Preset}] 
 */
export type itemAttributes = {
   name: string,
   settings?: ClientSettings,
}

export const create = async (attributes:itemAttributes) => {
    const { PresetDB } = await Store({});
    const id = uuidv4();
    const baseAttributes : Partial<Preset> = {
        id,
        created: new Date(),
    };
    const presetData = <Preset> Object.assign({}, baseAttributes, attributes);
    const created = await PresetDB.put(id, presetData);
    return presetData;
}
