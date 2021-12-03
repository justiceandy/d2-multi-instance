export default {
	startMinimized: {
		type: 'boolean',
        default: false,
	},
	onboarded: {
		type: 'boolean',
		default: false,
	},
	shortcutDirectory: {
		type: 'string',
	},
	notifications: {
		type: 'boolean',
		default: false,
	},
    account: {
        type: 'object',
        default: {},
        properties: {
            automatedLogin: {
                type: 'boolean',
                default: false,
            },
            accountStoreKey: {
                type: 'string',
                default: 'MASKED'
            },
            defaultRegion: {
                type: 'string',
                default: 'na'
            },
            defaultLocal: {
                type: 'string',
                default: 'enUS'
            },
        }
    },
    changeWindowTitles: {
		type: 'boolean',
		default: true,
	},
    automatedUpdates: {
		type: 'boolean',
		default: true,
	},
    debugMode: {
		type: 'boolean',
		default: false,
	},
	kernelDriver: {
		type: 'object',
        default: {},
		properties: {
			installed: {
				type: 'boolean',
				default: false,
			},
			version: {
				type: 'string'
			}
		}
	},
    api: {
		type: 'object',
        default: {},
		properties: {
			enabled: {
				type: 'boolean',
				default: true
			},
			port: {
				type: 'number',
				default: 3000
			}
		}
	},

};