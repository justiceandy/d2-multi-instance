export default {
	id: {
		type: 'string',
	},
	display: {
		type: 'string',
	},
    folder: {
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
        default: {},
		properties: {
			region: {
				type: 'string',
                default: 'us'
			},
			local: {
				type: 'string',
                default: 'enUS',
			},
			credentials: {
				type: 'object',
                default: {},
				properties: {
					email: {
						type: 'string',
                        default: '',
					},
					password: {
						type: 'string',
                        default: '',
					},
				},
			},
			automated: {
				type: 'boolean',
				default: false
			},
            token: {
                type: 'object',
                default: {},
                properties: {
                    REGION: {
                        type: 'string',
                    },
                    ACCOUNT: {
                        type: 'string',
                    },
                    ACCOUNT_STATE: {
                        type: 'string',
                    },
                    ACCOUNT_TS: {
                        type: 'string',
                    },
                    WEB_TOKEN: {
                        type: 'string',
                    },
                }
            },
		},
	},
	client: {
		type: 'object',
		properties: {
			d2r: {
				type: 'string',
                default: '',
			},
			launch: {
				type: 'object',
				properties: {
					pre: {
						type: 'string',
                        default: '',
					},
					post: {
						type: 'string',
                        default: '',
					},
				},
			},
			skipIntro: {
				type: 'boolean',
				default: true
			},
		},
        default: {}
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
		},
        default: {}
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
                default: 'none',
			},
			key: {
				type: 'string',
                default: 'none',
			},
		},
        default: {}
	}
};