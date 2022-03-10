import { Store } from '@d2r/level-db'
import { Plugin } from '@d2r/level-db/types';


export type updateArgs = {
    id: 'string',
    payload: Partial<Plugin>,
}
/**
 * {@link update} Update a Plugins Data 
 * @param id D2RMA Internal ID
 * @param payload {@link Plugin} Object containing Attributes to update 
 * @returns boolean 
 */
export const update = async ({ id, payload }:updateArgs) => {
    const { PluginDB } = await Store({});
    const currentPluginData = PluginDB.get(id);
    const updated = Object.assign({}, currentPluginData, payload);
    await PluginDB.put(id, updated);
    return true;
}

