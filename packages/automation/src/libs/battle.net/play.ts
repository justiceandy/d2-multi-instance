import { mouse, imageResource, screen, straightTo, centerOf, Region, keyboard, Key } from "@nut-tree/nut-js";
import { window } from '@d2r/utils';
import { createWindowRegion } from "../utils/createWindowRegion";
import { assetDirectory } from '../utils/assetDir';

export interface PlayArgs {
    delay: number
    polling: number
    highlight: boolean
    customColor: string | null
}

const defaults = {
    delay: 3000,
    polling: 200,
    highlight: true,
    customColor: null,
}

/**
 * {@link play} OCR Automation for Clicking Play Button on Battle.net Launcher
 * @param delay Timeout for Image Matchers
 * @param polling Polling Speed for Nut.js Wait For
 * @param highlight Highlight Regions for OCR
 * @param customColor Apply Custom Color to Image Buffer Matches
 */
export const play = async (args?:PlayArgs) => {
    const {
        delay,
        polling,
        highlight,
        customColor,
    } = Object.assign({}, defaults, args);

    // Nut JS Config
    screen.config.highlightDurationMs = 500;
    screen.config.autoHighlight = highlight;
    screen.config.resourceDirectory = assetDirectory;
    mouse.config.mouseSpeed = 3000;
    
    // Launcher Window
    // Get Bounds so we can supplying a region instead of the entire screen
    const launcherWindow = await window.getWindowByTitle('Battle.net');

    if(launcherWindow === null) {
        throw new Error('Launcher Window Not Found');
    }
    const { bounds } = await createWindowRegion(launcherWindow)
    await window.showWindowByTitle('Battle.net')

    // Press Escape key to close any random popup ads (:rage:)
    await keyboard.pressKey(Key.Escape);
    await keyboard.releaseKey(Key.Escape);

    // Login Screen Region, This lets slims down the chance of finding the same color
    const AppRegion = new Region(
        bounds.left,
        bounds.top + 160,
        350,
        bounds.height - 160,
    );

    await screen.highlight(AppRegion); 
    const image = await imageResource('play.png');
    
    // TODO: Support Buffer Altering based on custom RGB
    //console.log(image.data);
    
    try {
        // Click the play button
        await mouse.move(
            straightTo(
                centerOf(
                    screen.waitFor(image, delay, polling, {searchRegion: AppRegion})
                )
            )
        );
    } catch(e) {
        throw new Error("OCR Failure: Unable to Find Play Button");
    }

    await mouse.leftClick();
    
    return true;
}
