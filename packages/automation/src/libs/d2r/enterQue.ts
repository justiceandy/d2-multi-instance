import { mouse, imageResource, screen, straightTo, centerOf, Region, keyboard, Key } from "@nut-tree/nut-js";
import { window } from '@d2r/utils';
import { createWindowRegion } from "../utils/createWindowRegion";
import { assetDirectory } from '../utils/assetDir';

export interface QueArgs {
    delay?: number
    polling?: number
    highlight?: boolean
    username: string
    customColor?: string | null
}

const defaults = {
    delay: 3000,
    polling: 200,
    highlight: true,
    customColor: null,
}


// Enter Que by Sending Keypress Events so we dont need focus
export const enterQue = async (args:QueArgs) => {
    const {
        delay,
        polling,
        username,
        highlight,
    } = Object.assign({}, defaults, args);

    // Nut JS Config
    screen.config.highlightDurationMs = 500;
    screen.config.autoHighlight = highlight;
    screen.config.resourceDirectory = assetDirectory;
    mouse.config.mouseSpeed = 30000; 
    keyboard.config.autoDelayMs = 0;

    const gameWindow = await window.getWindowByTitle('Diablo II: Resurrected');
    const profileWindow = await window.getWindowByTitle(username);

    const renamed = gameWindow ? false : true;
    const selectionWindow = gameWindow || profileWindow;

    const { bounds, region } = await createWindowRegion(selectionWindow);

    const searchParams = {
        searchRegion: region, 
    }

    await screen.highlight(region);
    const image = await imageResource('redBlizzardLogo.png');   

    try {
        await mouse.move(
            straightTo(
                centerOf(
                    screen.waitFor(image, delay, polling, searchParams)
                )
            )
        );
        await mouse.leftClick();
        await keyboard.pressKey(Key.Space);  
        await keyboard.releaseKey(Key.Space);
        await mouse.leftClick();
    } catch(e) {
        throw new Error("OCR Failure: Unable to Enter Login Que");
    }
    return true;
}


