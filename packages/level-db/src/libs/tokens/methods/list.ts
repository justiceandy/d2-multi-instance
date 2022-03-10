import { Store } from '@d2r/level-db'
import { Token } from '@d2r/level-db/types';
/*
    Module returns array of stored accounts
*/
export const list = async () => {
    const { TokenDB } = await Store({});
    const tokens : Token[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of TokenDB.iterator() ) {
       const tokenData : Token = value;
       tokens.push(tokenData);
    }
    return tokens
}
 