// @ts-nocheck

export default function EditAccountFormFunctions (send, state) {

    const deleteAccount = (e:any) => {
        console.log(e);
        e.preventDefault();
        send('DELETE')
    }
    const nextAccount = (e:any) => {
        console.log(e);
        e.preventDefault();
        send('NEXT_ACCOUNT')
    }
    const prevAccount = (e:any) => {
        console.log(e);
        e.preventDefault();
        send('PREV_ACCOUNT')
    }

    const onDisplayNameChange = () => {
        console.log('Display Name Change')
    }

    const onGameFolderChange = () => {
        console.log('Game Folder Change')
    }

    const onAttributeChanged = (args:any) => {
        const { event, name } = args;
        const { type, value } = event.target;
        const route = Object.keys(state.value).pop();
        const routeContext = state.context[route];
        const payload = { name, value, route: route }
        event.preventDefault();
        // Flip Value if checkbox
        if(type === 'checkbox'){
            payload.value = routeContext[name] ? false : true;
        }
        // Major Changes have unique functions, Display Name / Folder since they need extra
        // validation
        if(route === 'general' && name === 'display') return onDisplayNameChange()
        if(route === 'general' && name === 'folder') return onGameFolderChange()
        // Default Update Action\
        send('UPDATE_ATTRIBUTE', payload);
    }

    const navigateTo = ({ event, route }:any) => {
        event.preventDefault();
        send(route.toUpperCase());
    }

    return {
        deleteAccount,
        nextAccount,
        prevAccount,
        onAttributeChanged,
        navigateTo,
    }
}