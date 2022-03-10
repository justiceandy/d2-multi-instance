import { Store } from '@d2r/level-db'
import { Preset } from '@d2r/level-db/types';


export type updatePresetArgs = {
    id: string,
    payload: Partial<Preset>,
    merge: boolean,
}

/**
 * {@link update} Update a Preset Data Record
 * @param id D2RMA Internal ID
 * @param payload {@link Squad} Object containing Attributes to update 
 * @param merge If Merging current Squad Data with Included Payload
 * @returns boolean 
 */
export const update = async ({ id, payload, merge = true }:updatePresetArgs) => {
    const { PresetDB } = await Store();
    if(merge){
        const currentData : Preset = await PresetDB.get(id);
        const currentSettings = currentData.settings || {};
        const modifiedSettings = payload.settings || {};
        const updated = Object.assign({}, currentData, payload);
              updated.settings = Object.assign({}, currentSettings, modifiedSettings);
        
        await PresetDB.put(id, updated);
    }
    if(!merge){
        await PresetDB.put(id, payload);
    }
    return true;
}

