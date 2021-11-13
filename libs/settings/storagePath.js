import { moduleDir } from '../utils';
import path from 'path';

export default function () {
    const { __dirname } = moduleDir(import.meta.url);
    const rootDir = path.resolve(`${__dirname}/../../`);
    return `${rootDir}/settings.json`;
}
