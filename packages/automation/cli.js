require('module-alias/register')
require("@nut-tree/template-matcher"); 
const { Command } = require('commander');
const battlenet = require('@d2r/battle.net');
const db = require('@d2r/level-db');
const { login } = require('@d2r/automation');


const autoLogin = async ({ account, profile }) => {
  
    // Launch Game with First Account & Profile
    const gameId = await battlenet.process.launch({
      email: account.email,
      accountId: account.accountId,
      session: account.session,
      gameFolder: profile.client.folder,
      pre: profile.client.pre,
      post: profile.client.post,
    });
    
    // Decrypt Password
    const password = await db.account.getPassword(account.email)
  
    // Run Automation
    await login({
      username: account.email,
      password,
    });

    // Adjust Window

    // Post Event

}
/*
    Output Test Data 
*/
const run = async () => {
  const { process, agent, registry } = battlenet;

  // const handle = await process.handle64.isInstalled();
  // const handleReg = await registry.handle64.get();
  const processWatch = await process.watch();
  const watcher = await registry.watch();
  
  const accounts = await db.account.list();
  const profiles = await db.profiles.list();

  // Login to First Account
  console.log('Launching First Account', accounts[0].email);
  await autoLogin({ account: accounts[0], profile: profiles[0] })

  // Login to Second Account
  console.log('Launching Second Account', accounts[1].email);
  await autoLogin({ account: accounts[1], profile: profiles[1] })

  // Login to Third Account
  console.log('Launching Third Account', accounts[2].email);
  await autoLogin({ account: accounts[2], profile: profiles[2] })

}

// const auto = async () => {

//   // Run Automation
//   await login({
//     username: 'd2r.chillcapped@gmail.com',
//     password: 'password$1',
//     loginStep: false,
//   });


// }

run();
