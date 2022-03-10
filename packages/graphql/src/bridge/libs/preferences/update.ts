import { Store } from '../store'

/*  
    Updates Account Data by merging supplied Payload with existing
*/
export const update = async ({ id, payload }:any) => {
    const { Preference } = await Store({});

    
    return true;
}

