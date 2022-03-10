const { get } = require('../get');

test('Battle.net - Agent/Config - Get - Should Return Client Config w/ Custom Dir', async () => {
    const expectedClient = {
        "Version": {
            "FirstRun": "false",
            "Release": {
                "FirstRun": "false",
                "LastBuildVersion": "13177",
                "LastSeenPatchNotesVersion": "13177"
            }
        },
        "Toasts": {
            "ScreenPosition": "BottomRight",
            "Monitor": "0"
        },
        "GaClientId": "0CDCA6EA-EAAC-4BCE-995B-BDA3A71C76B1",
        "SavedAccountNames": "example1@gmail.com,example2@gmail.com,example3@gmail.com",
        "AppearOffline": {
            "LastNotificationMS": "0",
            "IsNotificationSeen": "true",
            "IsNotificationLongCheckDelaySetting": "true"
        },
        "GameSearch": {
            "PerformedSearch": "true"
        },
        "AutoLogin": "true",
        "SingleInstance": "false"
    };
    const defaultCommand = await get({ 
        dir: `${__dirname}/fixtures`,
        fileName: 'example.battle.net.config',
      });

    expect(defaultCommand).toEqual(expect.objectContaining(
        { 
            Client: expectedClient,
            Games: expect.any(Object),
            "5a61123b37cafce1": expect.any(Object)
         }
    ));
    
});


test('Battle.net - Agent/Config - Get - Should Return Account Config w/ Custom Dir', async () => {
    const expectedAccount = {
            "Client": {
                "Windows": {
                    "BrowserMainWindow": {
                        "WindowPosition": "@Point(2293 380)",
                        "WindowSize": "@Size(1022 766)"
                    }
                },
                "HasSeenFirstTimeExperience": "true",
                "HideOnClose": "false",
                "DisplayExitPrompt": "false",
                "WindowNotificationShown": "true",
                "FriendsListCollapsed": "true"
            },
            "Games": {
                "osi": {
                    "LastSeenPatchNotesBuild": "67005"
                }
            }
    };
    const defaultCommand = await get({ 
        dir: `${__dirname}/fixtures`,
        account: '1234567b',
      });
    expect(defaultCommand).toEqual(expect.objectContaining({ User: expectedAccount }));
    
});