const { getUtilization } = require('../utilization');

test('CPU - Utilization should return load', async () => {
    
    await getUtilization({ pid: 7204 });
});
