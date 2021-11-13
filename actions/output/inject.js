import chalk from 'chalk';
import globals from './globals';
const log = console.log;

/*
    Module Contains CLI Output for Inject Action
*/
const onStart = ({ accountData, settingsFile }) => {
    globals.header();
    console.log('Injecting Session for', accountData.name);
}

const onNotFound = ({ account, settingsFile }) => {
    console.log('Account was not found in settings');
}

const onSuccess = ({ accountData, settingsFile }) => {
    console.log('Successfully Injected Session for', accountData.name);
}

export default { onStart, onNotFound, onSuccess }