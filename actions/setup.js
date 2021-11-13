import inquirer from 'inquirer';
import fs from 'fs';
import { d2process, settings } from '../libs';
import { download, unzip, moduleDir } from '../libs/utils';
import output from './output/setup';
import handle64 from '../libs/registry/handle64-tos';

/*
    Module handles Setting up CLI
     - Accepting Handle64 TOS Via Regedit
     - Prompts for Accounts.json
 */
export default async function (args) {
    const { __dirname } = moduleDir(import.meta.url);
    const utilDir = `${__dirname}/../utils`;
    let updatedTos = false;

    // Download Handle Zip
    // const handleZip = await download('https://download.sysinternals.com/files/Handle.zip', utilDir);
   
    // // Export Handle Zip
    // const unpacked = await unzip(`${utilDir}/Handle.zip`, utilDir);

    const handleTos = await handle64.get();

    if(!handleTos.exists) { 
        updatedTos = await handle64.set();
    }

    // Account Data for Each
    const accountInfoPrompt = (index) => {
        const accountNumber = index++;
        return [
            {
                type: 'input',
                name: `account${accountNumber}_name`,
                message: `Account ${accountNumber} Email:`,
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
                name: `account${accountNumber}_folder`,
                message: `Account ${accountNumber} Game Folder:`,
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
                name: `account${accountNumber}_display`,
                message: `Account ${accountNumber} Display Name:`,
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
        ]
    }


    // Prompts for Sym Link


    // Store Init Settings File

    const questions = await inquirer.prompt({
        type: 'number',
        name: 'accounts',
        message: "How many accounts do you want to setup?",
    })
    .then((res) => {
        const accountData = [];
        for(let x = 0; x < parseInt(res.accounts); x++){
            accountInfoPrompt(x).map(i => {
                accountData.push(i);
            })
        }
        return inquirer.prompt(accountData)
    }).then((res) => {
        console.log(res)
    });

};
