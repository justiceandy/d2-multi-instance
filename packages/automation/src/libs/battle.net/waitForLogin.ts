import { mouse, imageResource, screen, straightTo, centerOf, Region, sleep } from "@nut-tree/nut-js";
import { window } from '@d2r/utils';
import { createWindowRegion } from "../utils/createWindowRegion";
import { assetDirectory } from '../utils/assetDir';
import { AbortController } from 'node-abort-controller';
import "@nut-tree/template-matcher"; 

export interface WaitForArgs {
    delay?: number
    polling?: number
    highlight?: boolean
    customColor?: string | null
    initialLoad?: number
}

const defaults = {
    delay: 3000,
    polling: 200,
    highlight: true,
    customColor: null,
    initialLoad: 2000,
}

type appState = 'login' | 'loggingIn' | 'play';


/**
 * {@link waitForLogin} OCR for Waiting for Login Screen to appear
 * 
 * Also determines state based on UI of Login Screen. (Login | LoggingIn)
 * @param delay Timeout for Image Matchers
 * @param polling Polling Speed for Nut.js Wait For
 * @param highlight Highlight Regions for OCR
 * @param customColor Apply Custom Color to Image Buffer Matches
 */
export const waitForLogin = async (args?:WaitForArgs) => {
    const { initialLoad, highlight, customColor, delay, polling } = Object.assign({}, defaults, args || {});

    // Nut JS Config
    screen.config.highlightDurationMs = 500;
    screen.config.autoHighlight = highlight || true;
    screen.config.resourceDirectory = assetDirectory;
    screen.config.confidence = 0.96;
    mouse.config.mouseSpeed = 30000; 

    // Sleep for Application to Load
    await sleep(initialLoad || defaults.initialLoad);

    // Launcher Window
    // Get Bounds so we can supplying a region instead of the entire screen
    const launcherWindow = await window.getWindowByTitle('Battle.net Login');
    const { bounds } = await createWindowRegion(launcherWindow)
    await window.showWindowByTitle('Battle.net Login')

    const appWindowRegion = new Region(
        bounds.left,
        bounds.top,
        bounds.width,
        bounds.height,
    );
    // Login Form Section of the Battle.net App Window
    const LoginRegion = new Region(
        bounds.left + 360,
        bounds.top,
        bounds.width / 2,
        bounds.height,
    );
    await screen.highlight(LoginRegion);

    // Default Search Params for Images
    // App Window 
    const searchParams = {
        searchRegion: LoginRegion, 
    }
    // Abort Controller Per Wait for is Required to Work Properly
    // These are outside so we can call them after promise.race
    const aborts = {
        login: new AbortController(),
        loggingIn: new AbortController(),
        play: new AbortController(),
    }
    
    // Wait for Login Button to Appear
    const waitForLogin = async () => {
        const loginButton = await imageResource('login2.png');
        const loginButtonParams = {
            ...searchParams,
            abort: aborts.login.signal 
        };
        try {
            await screen.waitFor(loginButton, delay, polling, loginButtonParams)
            return  <appState> 'login';
        } catch(e) {
            throw new Error("OCR Error: Failed to Find Login Button");
        }
     
    }

    // Wait for GreyScaled Keep Logged In Button
    // This means we are in the process of logging in already (Pre-Auth Session)
    const waitForLoggingIn = async () => {
        const logginIn = await imageResource('keepLoggedIn.png');
        const loggingInButtonParams = {
            ...searchParams,
            abort: aborts.loggingIn.signal 
        };
        try {
            await screen.waitFor(logginIn, delay, polling, loggingInButtonParams);
            return <appState> 'loggingIn';
        } catch(e) {
            throw new Error("OCR Error: Failed to Find Keep LoggedIn");
        }
    }

    // Run Login UI Checks to determine if we are logging in or need to.
    const loginState : appState = await Promise.race([
        waitForLogin(),
        waitForLoggingIn(),
    ]);

    // Call Abort Methods that didnt win the race ^.^
    Object.keys(aborts).map(
         /*@ts-expect-error */
        i => aborts[i].abort()
    );

    return loginState;
}
