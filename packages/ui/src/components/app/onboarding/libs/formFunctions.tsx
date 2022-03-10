// @ts-nocheck
    export default function OnboardingFormFunctions (send, state) {
        const next = (e:any) => {
            e.preventDefault();
            send('NEXT');
        }
        const prev = (e:any) => {
            e.preventDefault();
            send('PREV');
        }
        const onCheckBoxChanged = ({ event, name }:any) => {
            event.preventDefault();
            let value = event.target.value === 'on';
            send('UPDATE_SETTING', { name, value: state.context[name] ? false : true })
            return true;
         }
         const onFormInputChanged = ({ event, name }:any) => {
            event.preventDefault();
            let value = event.target.value;
            send('UPDATE_SETTING', { name, value })
            return true;
         }
        const navigateStep = ({ event, step }:any) => {
            event.preventDefault();
            send(step);
        }
        const addAccount = ({ name, folder }:any) => {
            send('ADD', { display: name, folder })
        }
        const removeAccount = ({ event, account }:any) => {
            event.preventDefault();
            send('REMOVE', { account })
        }
    
        const verifyAccount = ({ event }:any) => {
            event.preventDefault();
            const fileLoc = event.target.files[0].path;
        }
    
        const finalize = ({ event }:any) => {
            event.preventDefault();
            send('SUBMIT', state.context)
        }

        const openDiscord = ({ event, account }:any) => {
            event.preventDefault();
            console.log('Discord')
            window.electron.ipcRenderer.goToDiscord();
        }

        const openPatreon = ({ event, account }:any) => {
            event.preventDefault();
            console.log('Patreon')
            window.electron.ipcRenderer.goToPatreon();
        }
        const openGithub = ({ event, account }:any) => {
            console.log('Github')
            event.preventDefault();
            window.electron.ipcRenderer.goToGithub();
        }
        return {
            next, prev, onFormInputChanged, 
            navigateStep, addAccount, removeAccount, onCheckBoxChanged,
            verifyAccount, finalize, openDiscord, openPatreon, openGithub
        }
    }