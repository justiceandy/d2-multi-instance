import { mouse, imageResource, screen, straightTo, centerOf, Region, keyboard, Key } from "@nut-tree/nut-js";
import { window } from '@d2r/utils';
import { createWindowRegion } from "../utils/createWindowRegion";
import { assetDirectory } from '../utils/assetDir';

export interface PlayArgs {
    delay?: number
    polling?: number
    highlight?: boolean
    password: string
    username: string
    customColor?: string | null
}

const defaults = {
    delay: 3000,
    polling: 200,
    highlight: true,
    customColor: null,
}

// check if User Input Filed is Empty
const isEmptyUser = async ({ searchParams, delay, polling }: any) => {
    const emptyUser = await imageResource('blank-user.png');
    const emptyUserParams = {
        ...searchParams,
    };
    let result = true;
    try {
        await screen.waitFor(emptyUser, delay, polling, emptyUserParams)
    }
    catch(error) {
        result = false;
    }
    return result;
}

// Check If Password Input Field is Empty
const isEmptyPassword = async ({ searchParams, delay, polling }: any) => {
    const emptyPassword = await imageResource('blank-password.png');
    const emptyPasswordParams = {
        ...searchParams,
    };
    let result = true;
    try {
        await screen.waitFor(emptyPassword, delay, polling, emptyPasswordParams)
    }
    catch(error) {
        result = false;
    }
    return result;
}


/**
 * {@link login} OCR Automation for Logging into Battle.net Launcher
 * @param delay Timeout for Image Matchers
 * @param polling Polling Speed for Nut.js Wait For
 * @param highlight Highlight Regions for OCR
 * @param customColor Apply Custom Color to Image Buffer Matches
 */
export const login = async (args?:PlayArgs) => {
    const {
        delay,
        polling,
        password,
        username,
        highlight,
    } = Object.assign({}, defaults, args);

    // Nut JS Config
    screen.config.highlightDurationMs = 500;
    screen.config.autoHighlight = highlight;
    screen.config.resourceDirectory = assetDirectory;
    mouse.config.mouseSpeed = 30000; 
    keyboard.config.autoDelayMs = 0;

    // Launcher Window
    // Get Bounds so we can supplying a region instead of the entire screen
    const launcherWindow = await window.getWindowByTitle('Battle.net Login');
    const { bounds } = await createWindowRegion(launcherWindow)
    await window.showWindowByTitle('Battle.net Login')
    
    await screen.highlight(new Region(
        bounds.left,
        bounds.top,
        bounds.width,
        bounds.height,
    ));
    const LoginRegion = new Region(
        bounds.left + 360,
        bounds.top,
        bounds.width / 2,
        bounds.height - 100,
    );
    const searchParams = {
        searchRegion: LoginRegion, 
    }
    const [ emptyUser, emptyPassword ] = await Promise.all([
        isEmptyUser({ searchParams, delay, polling }),
        isEmptyPassword({ searchParams, delay, polling }),
    ]);

    const image = await imageResource('login.png');

    // If we Need to enter username
    if(emptyUser){
        console.log('Username is not Entered');
        await keyboard.type(username);
        await keyboard.pressKey(Key.Tab);
        await keyboard.releaseKey(Key.Tab);
    }

    // If we need to enter password
    if(emptyPassword){
        console.log('Password is not entered');
        await keyboard.type(password);
    }

    try {
        // Click the Login Button
        await mouse.move(
            straightTo(
                centerOf(
                    screen.waitFor(image, delay, polling, {searchRegion: LoginRegion})
                )
            )
        );
        await mouse.leftClick();
    } catch(e) {
        throw new Error("OCR Failure: Unable to Determine Bnet App State");
    }
    
    return true;
}
