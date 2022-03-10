import * as libs from './src/';
import { windowManager } from 'node-window-manager';
/*
    Output Test Data 
*/
const run = async () => {
    const { window, loader } = libs;
    // await window.sendKeyEvent({ 
    //     title: 'Diablo II: Resurrected',
    //     key: 'Escape',
    //     delay: 200,
    // });
    // await window.sendKeyEvent({ 
    //     title: 'Diablo II: Resurrected',
    //     key: 'ArrowDown',
    //     delay: 200,
    // });
    // await window.sendKeyEvent({ 
    //     title: 'Diablo II: Resurrected',
    //     key: 'Enter',
    //     delay: 200,
    // });
    // await window.showWindowByTitle('Diablo II: Resurrected');

    // await window.moveWindowByTitle({
    //     title: 'Diablo II: Resurrected',
    //     bounds: { 
    //         x: 250, 
    //         y: 39, 
    //         width: 1300, 
    //         height: 763 
    //     },
    // });
    // Set Active Window
    // Send Enter Event
    //const windows = await window.showWindow('58628');

    const plugins = await loader.load({
        directory: `${__dirname}\\src\\dynamic-loader\\examples\\plugins`
    });
    console.log(plugins);
}


run();
