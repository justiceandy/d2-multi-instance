const { enableAutoLogin } = require('../enableAutoLogin');

test('Battle.net - Enable Auto Login should set config options', async () => {
    const expectedAccounts = "example3@gmail.com,example1@gmail.com,example2@gmail.com"

    const updatedConfig = await enableAutoLogin({
        fileName: `example.battle.net.config`,
        dir: `${__dirname}/fixtures`,
        noExec: true,
    })

    const { AutoLogin, SingleInstance, GameLaunchWindowBehavior } = updatedConfig.Client

    expect(AutoLogin).toEqual("true");
    expect(SingleInstance).toEqual("false");
    expect(GameLaunchWindowBehavior).toEqual("2");
});
