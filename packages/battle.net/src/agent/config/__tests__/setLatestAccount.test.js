const { setLatestAccount } = require('../setLatestAccount');

test('Should Set Account as Latest', async () => {
    const expectedAccounts = "example3@gmail.com,example1@gmail.com,example2@gmail.com"

    const updatedConfig = await setLatestAccount({
        email: "example3@gmail.com",
        fileName: `example.battle.net.config`,
        dir: `${__dirname}/fixtures`,
        noExec: true,
    })
    const updatedValues = updatedConfig.Client.SavedAccountNames

    expect(updatedValues).toEqual(expectedAccounts);
    
});
