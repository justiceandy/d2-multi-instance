import util from 'util';
import child_process from 'child_process';
import { launchEvents } from '@d2r/level-db';
import { ClientConfig } from '@d2r/battle.net/types';
import { config } from '../../agent';

const exec = util.promisify(child_process.exec);
/*
    Module handles launching a Blizzard Game with Powershell using the Battle.net Launcher
    - Can Launch D2R.exe/Battle.net Launcher
*/
export type LaunchLifecycleEvent = {
    command: string | null
    shell: string | null
    payload: any | null
}

export interface LaunchOptions {
    email?: string | null
    accountId?: string | null
    bnetRoot?: string
    gameFolder?: string
    game?: string
    session?: string | null
    dry?: boolean
    launcherExe?: string
    pre?: LaunchLifecycleEvent | null
    post?: LaunchLifecycleEvent | null
}

export type LaunchResult = {
    accountId: string,
    gameFolder: string,
    pid: string,
    battleNetConfig: object,
    scripts: {
        pre: LaunchLifecycleEvent | null
        post: LaunchLifecycleEvent | null
    },
    bnetRoot: string,
    session: string | null,
    loginMeta: {
        account: string | null,
        battleTag: string | null,
    },
    command: string,
    autoLoginModified: boolean,
}


const defaultLifecycleOptions : LaunchLifecycleEvent = {
    command: null,
    shell: null,
    payload: null,
};

const defaults : LaunchOptions = {
    email: null,
    accountId: null,
    bnetRoot: "C:\\Program Files (x86)\\Battle.net", 
    gameFolder: "G:\\Blizzard\\Diablo II Resurrected", 
    game: 'osi',
    session: null, 
    dry: false,
    launcherExe: 'Battle.net Launcher.exe',
    pre: defaultLifecycleOptions, 
    post: defaultLifecycleOptions,
};

/**
 * {@link launch} Launches a D2R Game Client or Battle Net App based on Config in
 * {@link  LaunchOptions}
 * @param {string} email Battlenet Email
 * @param {string} accountId Unique Account ID for D2RMA
 * @param {string} bnetRoot Battle.net Root ("C:\Program Files (x86)\Battle.net")
 * @param {string} gameFolder Game Folder if different from Battle.net Root
 * @param {string} game Internal Game Name for Blizzard (Defaults to OSI)
 * @param {string} session from Switcher. Supports Pre Authentication Flow
 * @param {boolean=} dry  to print outcome instead of executing. Default: false
 * @param {string} launcherExe Name of Exe 'Battle.net Launcher.exe'
 * @param {LaunchLifecycleEvent} pre {@link LaunchLifecycleEvent} Pre Launch Event
 * @param {LaunchLifecycleEvent} post {@link LaunchLifecycleEvent} Post Launch Event
 * @returns {Promise<LaunchResult>}  Returns Payload with 
 * Meta Information Gathered from Login process
 */
export const launch =  async (args?:LaunchOptions) : Promise<LaunchResult> => {
    const { 
        session, 
        accountId,
        bnetRoot,
        email,
        launcherExe, 
        game, 
        gameFolder,
        pre,
        post,
        dry,
    } : LaunchOptions = Object.assign({}, defaults, args);

    /* 
        Store Launch Event
        - Note: we cant rely on capturing this pid as it may be the battle.net launcher
        so we store the event and use that timestamp to determine how account relates to processId
    */
    const event = await launchEvents.create({
        account: email,
        triggered: new Date().getTime() / 1000,
    })

    // Construct Powershell Command
    const sessionArg = session ? ` --session="${session}"`: '';
    const command = 
        `(Start-Process -FilePath '${bnetRoot}\\${launcherExe}' ` +
        `-passthru -ArgumentList '${sessionArg} --game="${game}" ` +
        `--gamepath="${gameFolder}"').ID`;
    
    const resultPayload : Partial<LaunchResult> = {
        gameFolder,
        scripts: {
            pre: pre || null,
            post: post || null,
        },
        bnetRoot,
        session,
        loginMeta: {
            account: null,
            battleTag: null,
        },
        command,
        autoLoginModified: false,
    }

    // if we have email, update the battle.net config order
    if(email){
        const battleNetConfig : { config: { Client: ClientConfig } } = await config.setLatestAccount({ email });
        const { Client } = battleNetConfig.config;
        // If we need to enable Auto Login Settings
        if(Client.AutoLogin === 'false') {
            await config.enableAutoLogin();
            resultPayload.autoLoginModified = true;
        }
    }

    // Pre Launch Command if D2R.exe
    const preLaunchRuntime = launcherExe === 'D2R.exe' && pre && pre.command && !dry
        ? await exec(pre.command, { 'shell': pre.shell || 'powershell.exe' })
        : null;

    if(preLaunchRuntime && preLaunchRuntime.stderr) {
        throw('Pre Launch Script Error')
    }

    // Launch Game
    const { stdout, stderr } : { stdout: any, stderr: any } = !dry ? 
        await exec(command, {'shell':'powershell.exe'})
        : { stdout: null, stderr: null };

    if (stderr) {
        throw('Failed to Launch with Powershell')
    }

    // Post Launch Command if D2R.exe
    const postLaunchRuntime = launcherExe === 'D2R.exe' && post && post.command  && !dry
        ? await exec(post.command, { 'shell': post.shell || 'powershell.exe' })
        : null;

    if(postLaunchRuntime && postLaunchRuntime.stderr) {
        throw('Post Launch Script Error')
    }

    return <LaunchResult> {
        pid: stdout.replace('\r\n', ''),
        ...resultPayload,
    };
}

