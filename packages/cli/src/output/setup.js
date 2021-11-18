import chalk from 'chalk';
import globals from './globals';
import { list } from './list';

const log = console.log;

/*
    Module Contains CLI Output for the Setup Action
*/
const onStart = () => {
    globals.init();
}

const info = () => {

}

const onSuccess = () => {

}


export default { onStart, info, onSuccess, list }