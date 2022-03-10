import { Store } from '@d2r/level-db'
import { Token } from '@d2r/level-db/types';
/*  
    Updates Account Data by merging supplied Payload with existing
*/

export type UpdateTokenArgs = {
    id: 'string',
    payload: Partial<Token>,
}

export const update = async ({ id, payload }:UpdateTokenArgs) => {
    const { TokenDB } = await Store({});
    const currentTokenData = TokenDB.get(id);
    const updated = Object.assign({}, currentTokenData, payload);
    await TokenDB.put(id, updated);
    return true;
}

