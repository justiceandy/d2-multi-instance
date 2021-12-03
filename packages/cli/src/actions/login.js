import { launcher } from '@d2r/libs/dist/battle.net/launch/launcher';
import { login } from '@d2r/libs/dist/battle.net/login';

/*
    Module Handles Logging into Bnet
*/
export default async (args) => {
    console.log('Start Account 1:')
    // await launcher({ 
    //     email: 'd2r.chillcapped@gmail.com',
    //     gameFolder: "G:\\Blizzard\\Diablo II Resurrected 4",
    //     session: '8869447113440542279'
    // });
    // await login({});
    // After Login lets kill handler

    console.log('Start Account 2')
    const launched  = await launcher({ 
        email: 'd2r3.chillcapped@gmail.com',
        gameFolder: "G:\\Blizzard\\Diablo II Resurrected 3",
        session: '18087053247420900241'
    });
    console.log(launched)
    console.log('Logging into', launched.pid)



    // await login({
    //     pid: launched.pid,
    //     email: 'd2r3.chillcapped@gmail.com',
    //     password: '',
    // });
    // console.log('After')
}
  
