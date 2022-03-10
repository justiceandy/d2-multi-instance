require('dotenv').config()
require('module-alias/register')
const { Command } = require('commander');
const libs = require('@d2r/level-db');
/*
  Simple CLI for interacting with levelDB in Development
    This is not intended to be used by DRMA directly.
*/
const program = new Command();

program
    .option('-d, --debug', 'output extra debugging')
    .option('-a, --action [type]', 'Script to run')
    .option('-p, --password [type]', 'Custom Password for Account Gen')
    .option('-f, --filter [type]', 'Filter')
    .version('0.0.1');

const run = async (args) => {
    program.parse(args);
    const options = program.opts();
    let result = null;
    console.log('------------------------------------');
    console.log('       D2RMA Database CLI      ')
    console.log('------------------------------------');
    console.log(options);
    console.log('------------------------------------');

    if(options.action === 'generate'){
      result = await libs.scripts.generateTestData({
        clear: true,
        ...options
      });
    }
    if(options.action === 'list'){
      result = await libs.scripts.listData(options);
    }
    if(options.action === 'clear'){
      result = await libs.scripts.clearData(options);
    }
    return result
}


run(process.argv)
  .then(res => console.log(res))
  .catch(err => console.log(err));
