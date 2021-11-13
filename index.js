#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import actions from './actions/index.js';

/*
  Command Line Interface for Library
*/
const args = new Command();

// Supported Command Line Arguments
args
  .version('0.0.1')
  .option('-a, --action <type>', 'list/kill/setup')
  .option('-ac, --account <type>', 'account name, required for some actions')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --silent', 'no output, overrides debug')
  .parse();


const run = async (args) => {
  const options = args.opts();
  return actions[options.action](options);
}

// invoke
run(args)
  .catch(err => (console.log(err)))