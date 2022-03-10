// @ts-nocheck
import { shell } from 'electron';

export default async () => {
    shell.openExternal('https://www.patreon.com/chillcapped');
    return ''
}