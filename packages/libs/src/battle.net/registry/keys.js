import process from 'process'

export default {
    "osi": {
        type: "HKCU",
        name: "Software/Blizzard Entertainment/Battle.net/Launch Options/OSI",
        callback: (e) => process.send('account-change')
    },
    "d2r-source": {
        type: "HKLM",
        name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Diablo II Resurrected",
        callback: () => process.send('d2r-source-change')
    },
    "bnet-source": {
        type: "HKLM",
        name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Battle.net",
        callback: () => process.send('bnet-source-change')
    }
};