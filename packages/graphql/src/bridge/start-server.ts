import bridge from './express';
import { Store } from './libs/store'
import account from './libs/account';
import profiles from './libs/profiles';
import preferences from './libs/preferences';
// start express bridge

const run = async () => {
    const { Accounts } = await Store({});
    const pushed = await Accounts.put('test', {
        test: true,
    });
    const accounts = await account.list();
    const prefs = await preferences.get();
    const profs = await profiles.list();
    console.log('Accounts', accounts);
    console.log('Preferences', prefs);
    console.log('Profiles', profs);
    // bridge({ port: 4000, bind: true });
}


run()
    .then(res => console.log(res))
    .catch(err => console.log(err))
