import { Store } from '@d2r/level-db'
import { User } from '@d2r/level-db/types';
import { v4 as uuidv4 } from 'uuid';


/**
 * {@link get} Get D2RMA User Data
 * @returns User 
 */
export const get = async () => {
    const { UserDB } = await Store({});
    // Defaults
    const result = {
        user: <User> {
            apiToken: uuidv4(),
            subscriberToken: uuidv4(),
            name: 'Anonymous',
            rank: 'Open Source',
            discord: null,
            avatarImageFile: null,
            d2gold: 0,
        }
    };
    // Override Defaults
    /* @ts-expect-error */
    for await (const [key, value] of UserDB.iterator()) {
        const prefKey = key as keyof User;
        const newUser : Partial<User> = {};
        newUser[prefKey as keyof User] = value;
        result.user = Object.assign({}, result.user, newUser);
    }
    return result.user;
}
 