// @ts-nocheck
    const killProcess = ({ event, send, id }:any) => {
        event.preventDefault();
        send('KILL', { account: id });
    };

    const launchGame = ({ event, send, id }:any) => {
        event.preventDefault();
        send('LAUNCH', { account: id });
    };
    const addToQue = ({ event, send }:any) => {
        event.preventDefault();
    }
    const removeFromQue = ({ event, send }:any) => {
        event.preventDefault();
    }

    const refreshAccount = ({ event, send, id }:any) => {
        event.preventDefault();
        send('AUTH', { account: id });
    };

    const cancelAction = ({ event, send, id }:any) => {
        event.preventDefault();
        send('CANCEL', { account: id });
    };

    export {
        killProcess,
        launchGame,
        addToQue,
        removeFromQue,
        refreshAccount,
        cancelAction,
    }