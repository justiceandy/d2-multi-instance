import { Store } from '../store'
import { Preferences } from './types/Preferences';

/*
    Module returns array of stored accounts
*/
export const get = async () => {
    const { Preference } = await Store({});
    // Defaults
    const result = {
        preferences: <Preferences> {
            lockPassword: null,
            startMinimized: false,
            onboarded: false,
            notifications: false,
            shortcutDirectory: '',
            changeWindowTitles: true,
            automatedUpdates: false,
            debugMode: false,
            globalProfileSettings: {
                override: true,
                automatedLogin: true,
                region: 'NA',
                local: 'em',
            },
            kernelDriver: {
                installed: false,
                version: null,
            },
            api: {
                enabled: false,
                port: 6800,
                apiKey: null,
            }
        }
    };
    // Override Defaults
    for await (const [key, value] of Preference.iterator()) {
        const prefKey = key as keyof Preferences;
        const newPrefs : Partial<Preferences> = {};
        newPrefs[prefKey as keyof Preferences] = value;
        result.preferences = Object.assign({}, result.preferences, newPrefs);
    }
    return result.preferences;
}
 