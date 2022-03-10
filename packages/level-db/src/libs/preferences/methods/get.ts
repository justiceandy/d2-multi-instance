import { Store } from '@d2r/level-db'
import { Preferences } from '@d2r/level-db/types';
import { defaultPreferences } from './default';



/**
 * {@link get} Get D2RMA App Preferences
 * @returns Preferences 
 */
export const get = async () => {
    const { PreferenceDB } = await Store();
    // Defaults
    const result = {
        preferences: defaultPreferences
    };
    // Override Defaults
    /* @ts-expect-error */
    for await (const [key, value] of PreferenceDB.iterator()) {
        const prefKey = key as keyof Preferences;
        const newPrefs : Partial<Preferences> = {};
        newPrefs[prefKey as keyof Preferences] = value;
        result.preferences = Object.assign({}, result.preferences, newPrefs);
    }
    return result.preferences;
}
 