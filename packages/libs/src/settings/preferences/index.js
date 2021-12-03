import Store from 'electron-store';
import PreferenceSchema from './schema';

let PreferenceStore = null;

const init = ({ cwd = null, name = 'preferences', encryptionKey = 'MASKED' }) => {
    const dataStoreConfig = { 
		name,
		schema: PreferenceSchema,
	};

	if(cwd) dataStoreConfig.cwd = cwd;
	
	PreferenceStore = new Store(dataStoreConfig);

	return PreferenceStore;
}

export default {
	PreferenceStore,
    PreferenceSchema,
	init,
}

export {
	PreferenceStore,
    PreferenceSchema,
	init,
}