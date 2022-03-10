import { v1 as uuidv1 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Token } from '@d2r/level-db/types';


const defaults = {
    processId: null,
    account: null
}
/**
 * {@link create} Create a Battle.net Auth Token Record
 * 
 * {@link Token}:
 * @param processId D2R Game Process ID
 * @param account Internal D2RMA Account ID associated with Token
 * @param raw Raw Value for Auth Tokens
 * @param compare Short Hash Values for Auth Tokens
 * @returns Account
 */
export const create = async (attributes:Token) => {
    const { TokenDB } = await Store({});
    const id = uuidv1({
        node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
        clockseq: 0x1234,
        msecs: new Date().getTime(),
        nsecs: 0,
    });
    const payload = Object.assign({ id }, defaults, attributes);
    const created = await TokenDB.put(id, payload);
    return created;
}
