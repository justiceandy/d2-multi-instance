const { get } = require('../get');


test('Should Return Local SQL DB', async () => {
     const database = await get({});
     console.log(database)
  });