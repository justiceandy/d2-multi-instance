import { Store } from '@d2r/level-db'
import { Profile } from '@d2r/level-db/types';

/**
 * {@link list} List all Stored Account Profiles
 * @returns [{@link Profile}] 
 */
export const list = async () => {
    const { ProfileDB } = await Store({});
    const profiles : Profile[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of ProfileDB.iterator()) {
        profiles.push(value);
    }
    return profiles
}
 