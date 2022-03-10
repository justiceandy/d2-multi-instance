import { Store } from '@d2r/level-db'
import { AbstractBatch } from 'abstract-leveldown'

export type updateUserArgs = {
    payload: {
        [key: string]:  any
    },
}

export type UserSetting = {
    [key: string]:  any
}

/**
 * {@link update} Update User Data
 * @param payload {@link Preferences} Object containing Attributes to update 
 * @returns updates[] 
 */
export const update = async ({ payload }:updateUserArgs) => {
    const { UserDB } = await Store();

    // Update Attributes in Atomic Batch
    const updates : AbstractBatch<any, any>[] = [];
    Object.keys(payload).map(key => updates.push({ type: 'put', key, value: payload[key] }));

    const updated = UserDB.batch(updates)

    return updates;
}

