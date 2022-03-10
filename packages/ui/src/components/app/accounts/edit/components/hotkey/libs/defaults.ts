const modifiers = [
    { value: 'none', label: 'None' },
    { value: 'shift', label: 'Shift' },
    { value: 'alt', label: 'Alt' },
    { value: 'ctrl', label: 'Ctrl' },
  ];
  
  const letters = [
    'none','A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ].map(
    i => ({ value: i, label: i })
  );
  
  const defaultHotkeys = {
    enabled: false,
    modifier: 'none',
    key: 'none',
  };


  export {
      modifiers,
      letters,
      defaultHotkeys,
  }
  export default {
    modifiers,
    letters,
    defaultHotkeys,
}