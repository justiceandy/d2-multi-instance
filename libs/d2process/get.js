import util from 'util';
import child_process from 'child_process';
import moduleDir from '../utils/moduleDir';

/*
  Module Returns active D2 Processes that have the Multi Instance Handler Active
    - For Obvious reasons this will only ever return 1 process.
    - Sometimes this fails (Race Condition) when executed in service mode
*/
export default async function() {
  const exec = util.promisify(child_process.exec);
  const { __dirname } = moduleDir(import.meta.url);
  const processName = "D2R"
  const handler = "\\Sessions\\1\\BaseNamedObjects\\DiabloII Check For Other Instances"

  try {
    const { stdout, stderr } = await exec(`"${__dirname}/../../utils/handle64.exe" -a -p "${processName}" "${handler}" -nobanner`);
    const [ name, pid, hex, handle ] = stdout
      .split(':')
      .map(i => i.replace("Event", "")
      .replace("pid", "")
      .replace("type", "")
      .replace(/\s/g, "")
      .replace("<Unknown>", ""));
    return { name, pid, hex, handle }
  }
  catch(e) {
    if(e.stdout === `No matching handles found.\r\r\n`) console.log('Warning: Failed to Find D2 Handler')
    else { console.log('Handler Error', e)}
    return null;
  }
}