import fs from 'fs/promises';
const defaultDir = 'C:\\ProgramData\\Battle.net\\Agent\\Logs';

const list = async ({ dir = defaultDir }) => {
    const folder = await fs.readdir(dir);
    const files = await Promise.all(
        folder.map(
            i => fs.readFile(`${dir}/${i}`)
        )
    );
    return files.map(
        i => (
            i.toString().split('--session=')[1].split('\'')[0]
        )
    );
}


export {
    list
}

export default list