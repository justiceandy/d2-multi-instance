import sudo from 'sudo-prompt';

/*
  Module Handles Closing a Handler for a D2 Process. 
      - Includes Sudo Prompt for Elevating if needed 
*/
export default async function({ hex, pid }) {
  const { __dirname } = moduleDir();
  const options = {
    name: 'D2 Instance Check',
  };
  sudo.exec(`"${__dirname}/../bin/handle64.exe" -c "${hex}" -y -p "${pid}" -nobanner`, options,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error)
      };
      console.log('Killed Handler:', pid);
    }
  );
  return true;
}