import { moduleDir } from '../utils';
import path from 'path';

export default function () {
    const { __dirname } = moduleDir();
    const rootDir = path.resolve(`${__dirname}/../settings.json`);
    return `${rootDir}/settings.json`;
}
