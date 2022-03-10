import { keyboard, Key, mouse, imageResource, screen, sleep, straightTo, centerOf, Region } from "@nut-tree/nut-js";
import path from 'path';


export interface InitializationOptions {
    hdr?: boolean
    assetDirectory?: string
    highlight?: boolean
}

const defaults = {
    hdr: false,
    assetDirectory: path.resolve(`${__dirname}/../assets/default`),
    highlight: true,
}
const init = (args?:InitializationOptions) => {
    const { assetDirectory, highlight, hdr } = Object.assign({}, defaults, args);

    screen.config.autoHighlight = highlight;
    screen.config.highlightDurationMs = 1500;
    screen.config.resourceDirectory = hdr 
        ? assetDirectory
        : path.resolve(`${__dirname}/../assets/hdr`);
    mouse.config.mouseSpeed = 45000;

    console.log('Asset Dir', screen.config.resourceDirectory);

    return {
        screen, 
        mouse, 
        imageResource, 
        keyboard, 
        Key, 
        Region,
        sleep, 
        straightTo, 
        centerOf
    }
}

export default init;

export {
    init
}
