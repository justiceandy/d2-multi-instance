import { Preferences } from '@d2r/level-db/types';

export const defaultPreferences = <Preferences> {
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
