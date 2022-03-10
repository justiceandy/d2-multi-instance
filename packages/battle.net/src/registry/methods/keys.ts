export interface RegistryKey {
    type: string
    name: string
    full: string
}

export type RegistryOSI = {
    ACCOUNT: {
        value: Number[]
        type: 'REG_BINARY'
    },
    ACCOUNT_STATE: {
        value: Number[]
        type: 'REG_BINARY'
    },
    WEB_TOKEN: {
        value: Number[]
        type: 'REG_BINARY'
    },
    ACCOUNT_TS: {
        value: string
        type: 'REG_SZ'
    }
}


export type RegistryEditResponse = {
    values: any
}

export type RegistryListOSI = {
    values: RegistryOSI
}
export type RegistryUpdateOSI = {
    'HKCU\\Software\\Blizzard Entertainment\\Battle.net\\Launch Options\\OSI': RegistryOSI
}
export interface RegistryOSIPayload {
    [key: string]: RegistryEditResponse
};

export const osi : RegistryKey = {
    type: "HKCU",
    name: "Software/Blizzard Entertainment/Battle.net/Launch Options/OSI",
    full: "HKCU\\Software\\Blizzard Entertainment\\Battle.net\\Launch Options\\OSI"
};

export const d2rSource : RegistryKey = {
    type: "HKLM",
    name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Diablo II Resurrected",
    full: "HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Diablo II Resurrected"
};
export const bnetSource : RegistryKey = {
    type: "HKLM",
    name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Battle.net",
    full: "HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Battle.net"
}
export const handleEula : RegistryKey = {
    type: "HKCU",
    name: "Software/Sysinternals/Handle",
    full: "HKCU\\Software\\Sysinternals\\Handle"
}

export interface HandleKey {
    EulaAccepted: {
        value: '1' | '0'
        type: 'REG_DWORD'
    }
}
export interface HandleUpdatePayload {
    [key: string]: HandleKey
}
