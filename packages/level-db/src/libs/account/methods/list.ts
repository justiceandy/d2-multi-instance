import { Store } from '@d2r/level-db'
import { Account } from '@d2r/level-db/types';


/**
 * {@link list} List all Stored Accounts
 * @returns [{@link Account}] 
 */
export const list = async () => {
    const { AccountDB } = await Store({});
    const accounts : Account[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of AccountDB.iterator() ) {
       const accountData : Account = value;
       accounts.push(accountData);
    }
    return accounts
}
 