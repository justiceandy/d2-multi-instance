import { Process } from '@d2r/level-db/types';
import { list } from './list';

export type getArgs = {
    filter: 'processId' | 'account' ,
    filterValue: string,
    multiple?: boolean,
}
/**
 * {@link get} Fetches a Game Process Record. 
 * @param filter Type of Filter ('processId' | 'account')
 * @param filterValue Value to filter on
 * @param multiple Boolean if looking for multiple records
 * @returns Promise<Process>
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const processes = await list();
    let filtered = [];

    switch (filter){
        case 'processId':{
            filtered = processes.filter(({ processId }:Partial<Process>) => processId === filterValue);
            break;
        }
        case 'account':{
            filtered = processes.filter(({ account }:Partial<Process>) => account === filterValue);
            break;
        }
    }

    if(filtered.length) return multiple ? filtered : filtered[0];

    return multiple ? <Process[]> [] : null;
}
 

