import chalk from 'chalk';
import globals from './globals';

const log = console.log;

/*
    Module Contains Output for List Action
*/

const onStart = () => {
    globals.header();
}

const list = (processes, accounts) => {
    const loggedIn = [];
    log('Running D2 Processes:', chalk.green(processes.length));
    log(chalk.grey('--------------------------------------------'));
    if(processes.length){
        processes.map(i => {
            log(chalk.green(`✔️ ${i.account}`))
            loggedIn.push(i.account)
        })
    };
    const loggedOut = accounts.filter(i => !loggedIn.includes(i.account));
    loggedOut.map(i => {
        log(chalk.red(`❌ ${i.account}`))
    })
    log(chalk.grey('--------------------------------------------'));
}


export default { onStart, list }

export { onStart, list }