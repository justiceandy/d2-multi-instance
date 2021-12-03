import fs from 'fs/promises';
const defaultDir = 'C:\\Users\\Diablo2\\AppData\\Roaming\\Battle.net';

const update = async ({ dir = defaultDir, config, noExec = false }) => {
    const newConfigJson = JSON.stringify(config, null, 2);
    const result = !noExec ? await fs.writeFile(`${dir}/Battle.net.config`, newConfigJson) : null;
    return newConfigJson;
}

export {
    update
}

export default update