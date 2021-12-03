
// @ts-nocheck
import { defaultBattleNet } from '../components/bnet/libs/defaults';
import { defaultHotkeys } from '../components/hotkey/libs/defaults';
import { defaultWindow } from '../components/window/libs/defaults';
import defaultClient from '../components/client/libs/defaults';

export default {
    update: {
        src: async (context, event) => {
            console.log('Updating Account State Serv', event);
            console.log(context);
            console.log('----');
            return true;
        },
    },
    getInfo: {
        src: async (context, event) => {
            // Get This Accounts Data + All Accounts 
            const { account, accounts, order } = await window.electron.ipcRenderer.getAccount({
                display: context.name,
                includeAll: true,
            });
            // Apply State Machine Data Format Defaults
            const { 
                battlenet = defaultBattleNet, 
                client = defaultClient, 
                hotkey = defaultHotkeys, 
                display,
                folder,
                main,
            } = account;

            // Return Payload
            const payload = {
                doc: account,
                accounts: accounts,
                general: {
                    order: 
                    display,
                    folder,
                    main,
                    order,
                },
                battlenet, 
                client, 
                hotkey, 
                window: account.window || defaultWindow, 
            }
            console.log(payload);
            return payload;
        },
    },
    isRunning: {
        src: async (context, event) => {
            console.log('Is Account Running');
            return true;
        },
    },
    getCredentials: {
        src: async (context, event) => {
            console.log(context)
            const account = await window.electron.ipcRenderer.getAccount({
                display: context.name
            });
            console.log('Creds', account.battlenet)
            return account.battlenet || defaultBattleNet;
        },
    },
    getClientScripts: {
        src: async (context, event) => {
            const account = await window.electron.ipcRenderer.getAccount({
                display: context.name
            });
            return account.client || defaultClient;
        },
    },
    getWindowPrefs: {
        src: async (context, event) => {
            console.log(context)
            const account = await window.electron.ipcRenderer.getAccount({
                display: context.name
            });
            return account.window || defaultWindow;
        },
    },
    getHotkeyPrefs: {
        src: async (context, event) => {
            const account = await window.electron.ipcRenderer.getAccount({
                display: context.name
            });
            return account.hotkey || defaultHotkeys;
        },
    },
    deleteAccount: {
        src: async (context, event) => {
            console.log('Deleting Account');
            return true;
        },
    },
    setMainAccount: {
        src: async (context, event) => {
            console.log('Deleting Account');
            return true;
        },
    },
}