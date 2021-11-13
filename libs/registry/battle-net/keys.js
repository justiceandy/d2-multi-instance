import process from 'process'


export default {
    "osi": {
        type: "HKCU",
        name: "Software/Blizzard Entertainment/Battle.net/Launch Options/OSI",
        callback: (e) => {
            //console.log('Account Change Callback')
            process.send('account-change')
        }
    },
    "d2r-source": {
        type: "HKLM",
        name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Diablo II Resurrected",
        callback: () => {
            //console.log('D2R Source Change')
            process.send('d2r-source-change')
        }
    },
    "bnet-source": {
        type: "HKLM",
        name: "SOFTWARE/WOW6432Node/Microsoft/Windows/CurrentVersion/Uninstall/Battle.net",
        callback: () => {
            //console.log('Bnet Source Change')
            process.send('bnet-source-change')
        }
    }
};