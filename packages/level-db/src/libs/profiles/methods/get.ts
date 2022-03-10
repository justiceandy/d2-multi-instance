import { Profile } from '@d2r/level-db/types';
import { Store } from '@d2r/level-db'
import { list } from './list';


export type getArgs = {
    filter: 'id' | 'name' | 'folder' | 'host' | 'squad' | 'region' | 'automated' | 'offline',
    filterValue?: string,
    multiple?: boolean,
}
/**
 * {@link get} Get Account Profile(s) by Filter Criteria.
 * {@link getArgs} Params:
 * @param filter 'id' | 'name' | 'folder' | 'host' | 'region' | 'automated' | 'offline'
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all accounts or first account found.
 * @returns Profile || Profile[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const { ProfileDB } = await Store({});
    const profiles = await list();
    let filtered = [];
    switch (filter){
        case 'id':{
            const profile = await ProfileDB.get(filterValue);
            return profile;
        }
        case 'name':{
            filtered = profiles.filter(({ name }:Partial<Profile>) => name === filterValue);
            break;
        }
        case 'folder':{
            filtered = profiles.filter(({ client }:Partial<Profile>) =>  client?.folder === filterValue);
            break;
        }
        case 'host':{
            filtered = profiles.filter(({ host }:Partial<Profile>) =>  host?.ip === filterValue);
            break;
        }
        case 'region':{
            filtered = profiles.filter(({ battlenet }:Partial<Profile>) =>  battlenet?.region === filterValue);
            break;
        }
        case 'automated':{
            filtered = profiles.filter(({ battlenet }:Partial<Profile>) =>  battlenet?.automated);
            break;
        }
        case 'offline':{
            filtered = profiles.filter(({ battlenet }:Partial<Profile>) =>  battlenet?.offlineOnly);
            break;
        }
        default: {
            filtered = profiles.filter(({ id }:Partial<Profile>) => id === filterValue);
            break;
         }
    }

    return multiple ? filtered : filtered.pop();
}
 

