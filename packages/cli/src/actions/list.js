import { d2process, settings } from '@d2r/libs';
const { account } = settings;
import output from '../output/list';

/*
    Module handles listing Running D2 Processes and their associations to accounts.json
 */
export default async function ({ debug }) {
    output.onStart();
    const accounts = await account.list();
    const { running } = await d2process.list();
    output.list(running, accounts);
    return { running, accounts };
}
  
