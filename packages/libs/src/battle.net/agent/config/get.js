import e from 'cors';
import fs from 'fs/promises';
const defaultDir = 'C:\\Users\\Diablo2\\AppData\\Roaming\\Battle.net';

const get = async ({ dir = defaultDir, account = false, fileName = "Battle.net.config" }) => {
    let file = null;
    
    if(account)
        file = await fs.readFile(`${dir}/${account}.config`);
    else 
        file = await fs.readFile(`${dir}/${fileName}`);

    return file ? JSON.parse(file.toString()) : null;
}


export {
    get
}

export default get