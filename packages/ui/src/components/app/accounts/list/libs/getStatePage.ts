export default function (state) {
    // Determine Content Page
    let page = null;
    const pages = [
        { id: 1, label: 'local', state: 'local' },
        { id: 2, label: 'squads', state: 'squads' },
        { id: 3, label: 'remote', state: 'remote' },
    ]
    // Determine Step from State Context
    page = state ? pages.filter(i => state.value === i.state).pop() : null;
    if(!page && state.value === 'idle') page = state.value;
    if(!page) page = pages.filter(i => Object.keys(state.value).indexOf(i.state) >= 0).pop()

    return page;
}

