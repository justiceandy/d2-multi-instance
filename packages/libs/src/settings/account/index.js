import Store from 'electron-store';
import AccountSchema from './schema';

const configFileStore = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share");

let AccountStore = null;

const init = ({ name = 'accounts', cwd, encryptionKey = null }) => {
    const dataStoreConfig = { 
		name,
		schema: {
            accounts: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: AccountSchema,
                }
            }
        },
	};

    if(cwd) dataStoreConfig.cwd = cwd;
    // for obfuscation, not security
	// keeps the goobs from ending the config file directly
	if(encryptionKey) dataStoreConfig.encryptionKey = encryptionKey;

	AccountStore = new Store(dataStoreConfig);
    
    return AccountStore;
}


export default {
    AccountSchema,
	AccountStore,
	init,
}

export {
    AccountStore,
    AccountSchema,
    init,
}