import { Store } from '../store'

/*  
    Updates Account Data by merging supplied Payload with existing
*/
export const update = async ({ id, payload }:any) => {
    const { Accounts } = await Store({});
    const currentAccountData = Accounts.get(id);
    const updated = Object.assign({}, currentAccountData, payload);
    await Accounts.put(id, updated);
    return true;
}

