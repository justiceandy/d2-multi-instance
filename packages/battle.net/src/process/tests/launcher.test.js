const { launcher } = require('../launcher');

test('Should Include Default Arguments', async () => {
   const defaultCommandString = `(Start-Process -FilePath 'C:\\Program Files (x86)\\Battle.net\\Battle.net Launcher.exe' -passthru -ArgumentList ' --game="osi" --gamepath="G:\\Blizzard\\Diablo II Resurrected"').ID`
     const defaultCommand = await launcher({ 
        noExec: true,
        email: 'd2r.chillcapped@gmail.com'
      });
      expect(defaultCommand.command).toEqual(defaultCommandString);
});

// test('Should Support Custom Game Folder', async () => {
//    const customGameFolder = "G:\\Blizzard\\Diablo II Resurrected 3"
//    const customFolderCommand = await launcher({ 
//       gameFolder: customGameFolder, 
//       noExec: true,
//     });
//     expect(customFolderCommand.command).toContain(`--gamepath="${customGameFolder}"`);
// });

// test('Should Support Custom Battle Net Root', async () => {
//    const customBnetRoot = "C:\\Program Files (x86)\\Battle.Custom.net";
//    const customBnetCommand = await launcher({ 
//       bnetRoot: customBnetRoot, 
//       noExec: true,
//     });
//     expect(customBnetCommand.command).toContain(`-FilePath 'C:\\Program Files (x86)\\Battle.Custom.net\\Battle.net Launcher.exe'`);
// });

// test('Should include Session Arguments', async () => {
//    const customSessionId = "17355269109526385392";
//    const customSession = await launcher({ 
//       session: customSessionId,
//       gameFolder: "",
//       noExec: true,
//     });
//     expect(customSession.command).toContain(`--session="${customSessionId}"`);
// });