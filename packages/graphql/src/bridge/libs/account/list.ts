import { Store } from '../store'
/*
    Module returns array of stored accounts
*/
export const list = async () => {
    const { Accounts } = await Store({});
    const accounts : any = [];
    for await (const [key, value] of Accounts.iterator()) {
       accounts.push(value);
    }
    return accounts
}
 