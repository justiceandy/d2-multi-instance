import Store from 'electron-store';

const accountSchema = {
	startMinimized: {
		type: 'boolean',
	},
	shortcutDirectory: {
		type: 'string',
	},
	defaultRegion: {
		type: 'string',
		default: 'NA'
	},
	notifications: {
		type: 'boolean',
		default: false,
	},
	automatedLogin: {
		type: 'boolean',
		default: false,
	},
    changeWindowTitles: {
		type: 'boolean',
		default: true,
	},
	kernelDriver: {
		type: 'object',
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

let PreferenceStore = null;

const init = () => {
	PreferenceStore = new Store({ 
		name: 'preferences',
		/* @ts-expect-error */
		schema: accountSchema,
		// this is just to obfuscate so file is less likely to be modified 
		// by another process, not for security
		encryptionKey: 'MASKED'
	});
	return PreferenceStore;
}

export default {
	PreferenceStore,
	init,
}