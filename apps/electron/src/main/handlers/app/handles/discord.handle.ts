// @ts-nocheck
import { shell } from 'electron';

export default async () => {
    shell.openExternal('https://discord.com');
    return ''
}