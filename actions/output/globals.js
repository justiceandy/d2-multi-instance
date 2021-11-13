import chalk from 'chalk';
const log = console.log;

/*
    Module contains globally used output for action scripts
*/
const header = () => {
    log(chalk.grey('--------------------------------------------'));
    log(chalk.green('👹 Diablo 2 Multi Account Process Handler 👹'));
    log(chalk.grey('--------------------------------------------'));
}

const onError = (e) => {
    log(chalk.red('Critical Error:'), e)
    log(chalk.grey('--------------------------------------------'));
}

const onWarning = (message) => {
    log(chalk.yellow('Warning:'), message)
    log(chalk.grey('--------------------------------------------'));
}


export default { header, onError, onWarning }