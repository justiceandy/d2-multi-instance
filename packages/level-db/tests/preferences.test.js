const { PreferenceStore, init } = require('../preferences');


test('Preferences Store should accept items and return default data', async () => {
     const preferenceStore = await init({
         cwd: `${__dirname}/fixtures`,
         name: 'preferences-test-1',
     });
     // Example Account
     const stored = await preferenceStore.set({
        startMinimized: true,
     });
     const expected = {
        "startMinimized": true,
        "onboarded": false,
        "notifications": false,
        "account": {
            "automatedLogin": false,
            "accountStoreKey": "MASKED",
            "defaultRegion": "na",
            "defaultLocal": "enUS"
        },
        "changeWindowTitles": true,
        "automatedUpdates": true,
        "debugMode": false,
        "kernelDriver": {
            "installed": false
        },
        "api": {
            "enabled": true,
            "port": 3000
        }
     };
     const storedResult = await preferenceStore.get();
     expect(storedResult).toEqual(expect.objectContaining(expected));
     preferenceStore.clear();
});
