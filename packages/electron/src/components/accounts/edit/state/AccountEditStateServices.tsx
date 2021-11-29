// @ts-nocheck
export default {
    update: {
        src: async (context, event) => {
            console.log('Updating Account');
            return true;
        },
    },
    getInfo: {
        src: async (context, event) => {
            console.log('Getting Account Info');
            return {
                id: 1,
                display: 'example1',
                battlenet: {
                    region: 'NA',
                    local: '',
                    credentials: {
                        email: '',
                        password: '',
                    },
                    automated: true,
                },
                client: {
                    d2r: '-w',
                    launch: {
                        pre: '',
                        post: '',
                    },
                    skipIntro: true,
                },
                window: {
                    powertrays: {
                        enabled: false
                    }
                },
                hotkey: {
                    enabled: false,
                    modifier: '',
                    key: '',
                }
            };
        },
    },
    isRunning: {
        src: async (context, event) => {
            console.log('Is Account Running');
            return true;
        },
    },
    getCredentials: {
        src: async (context, event) => {
            console.log('Get Credentials');
            return true;
        },
    },
    getClientScripts: {
        src: async (context, event) => {
            console.log('Get Client Scripts');
            return true;
        },
    },
    getWindowPrefs: {
        src: async (context, event) => {
            console.log('Get Window Prefs');
            return true;
        },
    },
    getHotkeyPrefs: {
        src: async (context, event) => {
            console.log('Get Hotkey Prefs');
            return true;
        },
    },
    deleteAccount: {
        src: async (context, event) => {
            console.log('Deleting Account');
            return true;
        },
    },
}