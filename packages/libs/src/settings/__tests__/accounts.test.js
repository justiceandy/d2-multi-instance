const { AccountStore, init } = require('../account');

// test('New Account Store should interialize with custom path', async () => {
//     const expectedPathResponse = '\\__tests__\\fixtures\\accounts.json';
//      const accountStore = await init({
//          cwd: `${__dirname}/fixtures`,
//          name: 'preferences-test-1',
//      });
//      expect(accountStore.path).toContain(expectedPathResponse);
// });


test('Account Store should accept items and return default data', async () => {
     const accountStore = await init({
         cwd: `${__dirname}/fixtures`,
         name: 'account-test-1',
     });
     // Example Account
     const stored = await accountStore.set({
        accounts: [{
            display: 'test-2',
            gameFolder: `${__dirname}/fixtures`,
        }]
     });
     const expected = {
			"display": "test-2",
			"gameFolder": expect.any(String),
			"main": false,
			"battlenet": {
				"region": "us",
				"local": "enUS",
				"credentials": {
					"email": "",
					"password": ""
				},
				"automated": false,
				"token": {}
			},
			"client": {
				"d2r": "",
				"skipIntro": true
			},
			"window": {},
			"hotkey": {
				"enabled": false,
				"modifier": "none",
				"key": "none"
			}
    };
     const storedResult = await accountStore.get('accounts');
     expect(storedResult).toEqual(expect.arrayContaining([ expected ]));
     accountStore.clear();
});


test('Account Store should support deletion', async () => {
    const defaultCommandString = ``;
    const accountStore = await init({
        cwd: `${__dirname}/fixtures`,
        name: 'account-test-2',
    });
    // Example Account
    const stored = await accountStore.set({
       accounts: [{
           display: 'test-3',
           gameFolder: `${__dirname}/fixtures`,
       }]
    });
    const storedResult = await accountStore.get('accounts');
    expect(storedResult).toEqual(expect.arrayContaining([ expect.any(Object) ]));
    accountStore.delete('accounts')
    const deletedResult = await accountStore.get('accounts');
    expect(deletedResult).toBeUndefined();
    accountStore.clear();
});
