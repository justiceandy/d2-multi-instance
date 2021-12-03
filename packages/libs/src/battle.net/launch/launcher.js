
import util from 'util';
import child_process from 'child_process';
import { config, database } from '../agent';

const exec = util.promisify(child_process.exec);
/*
    Module handles launching a Blizzard Game with Powershell using the Battle.net Launcher
*/

const defaultScriptOptions = {
    command: null,
    shell: null,
};

const launcher =  async ({ 
    email = null,
    bnetRoot = "C:\\Program Files (x86)\\Battle.net", 
    gameFolder = "G:\\Blizzard\\Diablo II Resurrected", 
    game = 'osi',
    session = false, 
    noExec = false,
    preLaunch = defaultScriptOptions, 
    postLaunch = defaultScriptOptions,
}) => {
    // Construct Powershell Command
    const sessionArg = session ? ` --session="${session}"`: '';
    const command = `(Start-Process -FilePath '${bnetRoot}\\Battle.net Launcher.exe' -passthru -ArgumentList '${sessionArg} --game="${game}" --gamepath="${gameFolder}"').ID`;
    
    // if we have email, update the battle.net config order
    const battleNetConfig = email ? await config.setLatestAccount({ email }) : null;

    const defaultResultPayload = {
        gameFolder,
        battleNetConfig,
        scripts: {
            pre: preLaunch,
            post: postLaunch,
        },
        bnetRoot,
        session,
        loginMeta: {
            account: null,
            battleTag: null,
        },
        command,
        autoLoginModified: null,
    }

    // If we need to enable Auto Login Settings
    if(battleNetConfig && battleNetConfig.Client.AutoLogin === 'false') {
        await config.enableAutoLogin({});
        defaultResultPayload.autoLoginModified = true;
    }

    // Pre Launch Command, defaulting to Powershell
    const preLaunchRuntime = preLaunch.command && !noExec
        ? await exec(preLaunch.command, { 'shell': preLaunch.shell || 'powershell.exe' })
        : null;

    if(preLaunchRuntime && preLaunchRuntime.stderr) {
        throw('Pre Launch Script Error', preLaunchRuntime.stderr)
    }

    // Launch Game
    const { stdout, stderr } = !noExec ? 
        await exec(command, {'shell':'powershell.exe'})
        : { stdout: null, stderr: null };

    if (stderr) {
        throw('Failed to Launch with Powershell', stderr)
    }

    // Post Launch Command
    const postLaunchRuntime = postLaunch.command  && !noExec
        ? await exec(postLaunch.command, { 'shell': postLaunch.shell || 'powershell.exe' })
        : null;

    if(postLaunchRuntime && postLaunchRuntime.stderr) {
        throw('Post Launch Script Error', postLaunchRuntime.stderr)
    }
    
    // if we have email, grab meta data from log in
    // - AppData\Local\Battle.net\CachedData
    // if(email) {
    //     const [ accountId , battleTags ] = await Promise.all([
    //         database.get({ query: 'accountId' }),
    //         database.get({ query: 'battleTags' })
    //     ]);
    //     defaultResultPayload.loginMeta.account = accountId ? JSON.parse(accountId.pop().value) : null;
    //     console.log(defaultResultPayload.loginMeta.account);
    //     defaultResultPayload.loginMeta.battleTag = battleTags ? battleTags.filter(
    //         i => i.account_id_lo === defaultResultPayload.loginMeta.account.account_id
    //     ).pop() : null;
    // }

    return {
        pid: stdout.replace('\r\n', ''),
        ...defaultResultPayload,
    };
}

export default launcher

export {
    launcher
}