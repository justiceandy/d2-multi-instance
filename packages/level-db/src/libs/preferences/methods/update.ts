import { Store } from '@d2r/level-db'
import { AbstractBatch } from 'abstract-leveldown'

export type updatePreferenceArgs = {
    payload: {
        [key: string]:  any
    },
}

export type PreferenceSetting = {
    [key: string]:  any
}

/**
 * {@link update} Update App Preferences
 * @param payload {@link Plugin} Object containing Attributes to update 
 * @returns updates[] 
 */
export const update = async ({ payload }:updatePreferenceArgs) => {
    const { PreferenceDB } = await Store();

    // Update Attributes in Atomic Batch
    const updates : AbstractBatch<any, any>[] = [];
    Object.keys(payload).map(key => updates.push({ type: 'put', key, value: payload[key] }));

    const updated = PreferenceDB.batch(updates)

    return updates;
}

