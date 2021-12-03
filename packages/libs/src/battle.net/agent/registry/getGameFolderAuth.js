import settings from "..";
import fs from 'fs/promises';
import path from 'path';

export default async function ({ folder }) {
    // account, account-state, web-token.bin
    const base64AuthToken = await fs.readFile(path.resolve(`${folder}/multi-launcher-auth.bin`));
    const tokens = JSON.parse(Buffer.from(Buffer.from(base64AuthToken).toString(), 'base64').toString());
    return tokens;
}