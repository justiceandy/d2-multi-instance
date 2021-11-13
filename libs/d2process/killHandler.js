import sudo from 'sudo-prompt';
import moduleDir from '../utils/moduleDir';

/*
  Module Handles Closing the Handler on a D2 Process. 
      - Includes Sudo Prompt for Elevating if needed 
*/
export default async function({ hex, pid }) {
  const { __dirname } = moduleDir(import.meta.url);
  const options = {
    name: 'D2 Instance Check',
    icns: `${__dirname}/../assets/d2-icon.ico`, 
  };
  sudo.exec(`"${__dirname}/../../utils/handle64.exe" -c "${hex}" -y -p "${pid}" -nobanner`, options,
    (error, stdout, stderr) => {
      if (error) return null;
      console.log('stdout: ' + stdout);
    }
  );
  return true;
}