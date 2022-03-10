import { window } from '@d2r/utils';
import { createWindowRegion } from "../utils/createWindowRegion";
import { sleep, mouse, straightTo, centerOf, screen, keyboard, Key } from "@nut-tree/nut-js";

export interface SkipIntroArgs {
    gameLoad: number
    username: string
    title?: string
    keyInputs?: number,
}

const defaults = {
    title: 'Diablo II: Resurrected',
    key: '',
    keyInputs: 10,
}

const pushQue = async (region:any) => {
    await sleep(600);
    await keyboard.pressKey(Key.Escape)
    await keyboard.pressKey(Key.Space)
    await mouse.move(straightTo(centerOf(region)));
    await mouse.leftClick();
    await mouse.leftClick();
    await mouse.leftClick();
    await mouse.leftClick();
}
// Skip Intro by Sending Keypress Events so we Dont need Focus
export const skipIntro = async (args:SkipIntroArgs) => {
    const { username, gameLoad, keyInputs = 10, title } = Object.assign({}, defaults, args);
    
    // Nut JS Config
    screen.config.highlightDurationMs = 500;
    mouse.config.mouseSpeed = 30000; 
    keyboard.config.autoDelayMs = 0;

    // Sleep for Game Load
    await sleep(gameLoad);

    const gameWindow = await window.getWindowByTitle('Diablo II: Resurrected');
    const profileWindow = await window.getWindowByTitle(username);

    const renamed = gameWindow ? false : true;
    const selectionWindow = gameWindow || profileWindow;

    const { bounds, region } = await createWindowRegion(selectionWindow);

    // Attempt to Push Que 
    // TODO: Better, this is cheeks
    await pushQue(region);
    await pushQue(region);
    await pushQue(region);
    await pushQue(region);

    return true;
}
