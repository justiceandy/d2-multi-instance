import * as libs from './src';

/*
    Output Test Data 
*/
const run = async () => {
  const { process, agent, registry, client } = libs;

  // const handle = await process.handle64.isInstalled();
  // const handleReg = await registry.handle64.get();
  // const processWatch = await process.watch();
  // const watcher = await registry.watch();

  // const settings = await client.settings.get();
  // const updated = await client.settings.update({
  //   preset: 'low',
  //   payload: {},
  // });
  
  const sessions = await agent.session.list();

  console.log(sessions);
}


run();
