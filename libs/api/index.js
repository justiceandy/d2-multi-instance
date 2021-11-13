import express from 'express'
import accounts from "./routes/account";
import settings from "./routes/settings";
import process from './routes/process';

/*
    Module Returns a simple express service
*/
export function start (port) {
    const app = express();

    app.use('/accounts', accounts);
    app.use('/settings', settings);
    app.use('/process', process);

    return app.listen(port, () => {
        console.log(`API Listening: ${port}`)
    })
}

export default {
    start,
}
