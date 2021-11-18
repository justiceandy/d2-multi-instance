import inquirer from 'inquirer';
import fs from 'fs';
import fsp from 'fs/promises';
import os from 'os';
import path from 'path';
import { settings, registry, utils } from '@d2r/libs';
const { unzipUrl, moduleDir } = utils;
const handle64 = registry.handle64;

import output from '../output/setup';

/*
    Module handles Setting up CLI
     - Accepting Handle64 TOS Via Regedit
     - Prompts for Accounts.json
 */
export default async function (args) {
    const { __dirname } = moduleDir();
    const utilDir = `${__dirname}/../bin`;
    const defaultSettings = await settings.preferences.defaults();
    const currentSettings = await settings.get();
    const promptDefaults = currentSettings ? currentSettings : defaultSettings;
    let answers = {};

    let updatedTos = false;

    // Download Handle
    const unpacked = await unzipUrl({
        url: 'http://download.sysinternals.com/files/Handle.zip',
        dest: `${utilDir}`,
        name: 'Handle.zip'
    });

    // Get Handle Terms
    const handleTos = await handle64.get();
    
    // If we havent accepted the ToS, do that
    if(!handleTos.exists) { 
        updatedTos = await handle64.set();
    }

    console.log('--------------------------------------')
    console.log('        Account Settings              ')
    console.log('--------------------------------------')

    // Step 1) Number of Accounts
    const accountNumberPrompt = {
        type: 'number',
        name: 'accounts',
        default: 2,
        message: "How many accounts do you want to setup?",
    };

    // Step 2) Account Data for Each
    const accountInfoPrompt = (index) => {
        const accountNumber = index + 1;
        const defaults = currentSettings.accounts[index] || null;
        return [
            {
                type: 'input',
                name: `name`,
                message: `Email:`,
                default: defaults ? defaults.name : '',
                validate(value) {
                    const pass = value.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                    if (pass) {
                    return true;
                    }

                    return 'Enter Valid Battle.net Email';
                },
            },
            {
                type: 'input',
                name: `folder`,
                message: `Game Folder:`,
                default: defaults ? defaults.folder : '',
                validate(value) {
                    const pass = value.match(
                        /^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/
                    );
                    if (pass) {
                        return fs.existsSync(value);
                    }
                    return 'Enter Full Path to existing D2R Game Folder (Not Battle.net)';
                },
            },
            {
                type: 'input',
                name: `display`,
                message: `Display Name:`,
                default: defaults ? defaults.display : '',
                validate(value) {
                    const pass = value.length < 1 ? false : true;
                    if (pass) {
                        return true;
                    }
                    return 'Display Name must have a value';
                },
            },
        ]
    }

    // Step 3) Preferences
    const preferencesPrompt = [
        {
            type: 'list',
            name: 'changeWindowTitles',
            message: "Change window titles to match account name",
            default: !promptDefaults.changeWindowTitles ? 'Disabled' : 'Enabled',
            choices: [ "Enabled", "Disabled" ]
        },
        {
            type: 'input',
            name: 'shortcutDirectory',
            message: "Directory to save shortcuts",
            default: path.join(os.homedir(), "Desktop"),
        },
        {
            type: 'list',
            name: 'notifications',
            message: "Recieve Windows Notifications for Background Process Events",
            default: !promptDefaults.notifications ? 'Disabled' : 'Enabled',
            choices: [ "Enabled", "Disabled" ]
        },
        {
            type: 'list',
            name: 'automatedLogin',
            message: "Automated Bnet Login",
            default: !promptDefaults.automatedLogin ? 'Disabled' : 'Enabled',
            choices: [ "Enabled", "Disabled" ]
        },
        {
            type: 'list',
            name: 'api',
            message: "Include Local API Endpoints",
            default: !promptDefaults.api.include ? 'Disabled' : 'Enabled',
            choices: [ "Enabled", "Disabled" ]
        }
    ];

    const apiSettings = [
        {
            type: 'number',
            name: 'port',
            message: "Local Port for API",
            default: promptDefaults.api.port
        }
    ];

    // // Store Init Settings File
    return await inquirer.prompt(accountNumberPrompt)
        .then(async (res) => {
            console.log(' ')
            answers.accountNumber = res.accounts;
            answers.accounts = [];
            for(let x = 0; x < parseInt(res.accounts); x++){
                console.log(`----------- Account ${x + 1} -------------`)
                const results = await inquirer.prompt(accountInfoPrompt(x));
                answers.accounts.push({
                    name: results.name,
                    folder: results.folder,
                    display: results.display,
                    tokens: currentSettings.accounts[x] 
                    ? currentSettings.accounts[x].tokens
                    : {},
                });
                console.log(' ')
            }
            return true;
        })
        .then((res) => {
            console.log('--------------------------------------')
            console.log('        General Preferences           ')
            console.log('--------------------------------------')
            return inquirer.prompt(preferencesPrompt)
        })
        .then((res) => {

            Object.keys(res).map(i => {
                if(res[i] === 'Enabled') res[i] = true;
                if(res[i] === 'Disabled') res[i] = false;
            })
            answers = Object.assign({}, answers, res);
            if(res.api === 'Enabled') return inquirer.prompt(apiSettings)
            return false;
        })
        .then((res) => {
            answers.api = {
                include: answers.api,
                port: res && res.port ? res.port : promptDefaults.api.port,
            }
            return fsp.writeFile(settings.storagePath(), JSON.stringify(answers, null, 2));
        })
        .then(res => {
            console.log('--------------------------------------')
            console.log('Saved to', settings.storagePath());
            console.log('--------------------------------------')
            return true;
        });
};
