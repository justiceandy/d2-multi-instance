
const regions = [
    { value: 'na', label: 'NA' },
    { value: 'eu', label: 'Europe' },
    { value: 'as', label: 'Asia' },
  ];
  
  const locals = [
    { value: 'en', label: 'English' },
  ];
  
  const defaultBattleNet = {
    credentials: {
      email: '',
      password: '',
    },
    automated: false,
    local: 'en',
    region: 'na',
  }
  

  export {
      regions,
      locals,
      defaultBattleNet,
  }

  export default {
      regions,
      locals,
      defaultBattleNet,
  }