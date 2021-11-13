import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default function (url){
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);
    return { __dirname, __filename };
}