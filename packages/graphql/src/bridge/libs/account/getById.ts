import { Store } from '../store'
/*
    Module returns account with matching folder
*/
export const getById = async (id:string) => {
    const { Accounts } = await Store({});
    const result = await Accounts.get(id);
    return result;
}
 