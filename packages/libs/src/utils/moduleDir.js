import {  resolve } from 'path';
import dirname from 'es-dirname'

/*
    Returns Root Library Directory,
        __dirname isnt available in esm by default :/
*/
export default function (url){
    const __dirname = resolve(dirname(), '../');
    return { __dirname: dirname };
}