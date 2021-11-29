import Store from 'electron-store';

const accountSchema = {
	id: {
		type: 'number',
	},
	display: {
		type: 'string',
	},
    order: {
		type: 'number',
	},
    main: {
		type: 'boolean',
        default: false
	},
	battlenet: {
		type: 'object',
		properties: {
			region: {
				type: 'string',
			},
			local: {
				type: 'string',
			},
			credentials: {
				type: 'object',
				properties: {
					email: {
						type: 'string',
					},
					password: {
						type: 'string',
					},
				},
			},
			automated: {
				type: 'boolean',
				default: false
			},
		}
	},
	client: {
		type: 'object',
		properties: {
			d2r: {
				type: 'string',
			},
			launch: {
				type: 'object',
				properties: {
					pre: {
						type: 'string',
					},
					post: {
						type: 'string',
					},
				},
			},
			skipIntro: {
				type: 'boolean',
				default: true
			},
		}
	},
	window: {
		type: 'object',
		properties: {
			powertrays: {
				type: 'object',
				properties: {
					enabled: {
						type: 'boolean',
						default: false
					}
				}
			}
		}
	},
	hotkey: {
		type: 'object',
		properties: {
			enabled: {
				type: 'boolean',
				default: false,
			},
			modifier: {
				type: 'string',
			},
			key: {
				type: 'string',
			},
		}
	}
};

let AccountStore = null;

const init = () => {
	AccountStore = new Store({ 
		name: 'accounts',
		/* @ts-expect-error */
		schema: accountSchema,
		// this is just to obfuscate so file is less likely to be modified 
		// by another process, not for security
		encryptionKey: 'MASKED'
	});
    return AccountStore;
}


export default {
	AccountStore,
	init,
}