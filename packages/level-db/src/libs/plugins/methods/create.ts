import { Store } from '@d2r/level-db'
import { Plugin } from '@d2r/level-db/types';
import { v4 as uuidv4 } from 'uuid';


/**
 * {@link create} Create D2RMA Plugin
 * 
 * {@link Plugin}:
 * @param enabled if plugin is enabled in marketplace (boolean)
 * @param name name of plugin
 * @param description description of plugin
 * @param defaultConfiguration Default Configuration Settings for Plugin
 * @param developer Developer Handle
 * @param discord Discord for Plugin
 * @param premium If Plugin is only premium members (boolean)
 * @returns Plugin
 */
export const create = async (attributes:Plugin) => {
    const { PluginDB } = await Store();
    const id = uuidv4();
    const baseAttributes = {
        id,
        enabled: true,
        premium: false,
        discord: null,
        developer: null,
        defaultConfiguration: {},
        description: '',
    };
    const result:Plugin = Object.assign({}, baseAttributes, attributes);
    const created = await PluginDB.put(id, result);
    
    return result;
}
