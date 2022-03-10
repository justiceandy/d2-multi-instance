import * as libs from '..';


const exampleAccounts = [ 
    'd2r.chillcapped@gmail.com', 
    'd2r2.chillcapped@gmail.com', 
    'd2r3.chillcapped@gmail.com', 
];

const exampleSessions = [ 
    '2474079738879502520', 
    '10828337879710797373',
    '5416071665785591386',
    '2180286925365297669',
    '3907114997368266408',
    '17828119111031497960',
];

/*
    Module handles Generating Test Data
*/
const exampleProfile = ({
    index,
    accountId
}:any) => {
    return {
        name: `example${index}@gmail.com`,
        order: index,
        host: {
            ip: 'localhost',
        },
        client: {
            folder: 'G:\\Blizzard\\Diablo II Resurrected 5',
            exeType: 'D2R.exe',
            skipIntro: true,
            waitInQue: true,
            pre: {
                type: 'powershell',
                command: 'echo test',
            },
            post: {
                type: 'powershell',
                command: 'echo test',
            }
        },
        window: {
            fancyZones: {
                enabled: false
            }
        },
        hotkey: {
            enabled: false,
            modifier: null,
            key: null,
        },
        battlenet: {
            region: 'US',
            account: accountId,
            local: 'EN',
            automated: true,
            offlineOnly: false,
        },
        plugins: []
    }
}

const exampleAccount = (index:number) => {
    return {
        email: exampleAccounts[index],
        password: process.env.D2R_TEST_PASSWORD || `password${index}`,
        session: exampleSessions[index],
        battleTag: 'example#1234',
        tokens: {
            ACCOUNT: null,
            ACCOUNT_STATE: null,
            ACCOUNT_TS: null,
            WEB_TOKEN: null,
        },
        plugins: []
    }
}

const generateAccount = async (index:number) => {
    // Create Account
    const account = await libs.account.create(exampleAccount(index));

    // Create Account Profile
    const profile = await libs.profiles.create(exampleProfile({
        index,
        accountId: account.id,
    }))
    return {
        account,
        profile,
    }
}

export const generateTestData = async ({ 
    filter = 'accounts',
    clear = false,
    password = null,
}) => {
    let result = {};

    password ?
        process.env.D2R_TEST_PASSWORD = password
    : null;

    if(filter === 'accounts') {

        // Clear Previous Data
        const cleared = clear ? await Promise.all([
            libs.launchEvents.clear(),
            libs.account.clear(),
            libs.profiles.clear(),
            libs.processes.clear(),
            libs.machines.clear(),
            libs.squads.clear(),
        ]) : null;

        const generatedAccounts = await Promise.all(
            exampleAccounts.map((i, index) => generateAccount(index))
        );

        // Create Machine
        const localMachine = await libs.machines.create({
            host: 'localhost',
        })

        // Create Squad
        const squad = await libs.squads.create({
            name: 'Default',
            profiles: generatedAccounts.map((i, index) => {
                return {
                    profileId: i.profile.id,
                    machineId: localMachine.id,
                    order: index,
                }
            }),
        })

        result = {
            accounts: generatedAccounts.map(i => i.account.id),
            profiles: generatedAccounts.map(i => i.profile.id),
            machine: localMachine,
            squad: squad,
            cleared,
        };
    }
   
    return result;
}
