
export default function OnboardingConfigFormRows({ 
    automatedLogin, changeWindowTitles, desktop, addStartup, 
    onCheckBoxChanged, genShortcuts, autoUpdate, onInputChanged, apiEnabled  }:any) {

    const top = [
        { 
            type: 'text', 
            name: 'shortcutDirectory', 
            label: 'Shortcut Directory:',
            defaultValue: desktop, 
            onChange: onInputChanged 
        },
    ];

    const bottom = [
        { 
            type: 'checkbox', 
            label: 'API Enabled:',
            name: 'apiEnabled', 
            value: apiEnabled, 
            defaultValue: apiEnabled, 
            onChange: onCheckBoxChanged 
        },
        { 
            type: 'checkbox', 
            label: 'Automated Login:',
            name: 'automatedLogin', 
            value: automatedLogin, 
            defaultValue: automatedLogin, 
            onChange: onCheckBoxChanged 
        },
        { 
            type: 'checkbox', 
            label: 'Manage Window Titles:',
            name: 'changeWindowTitles', 
            defaultValue: changeWindowTitles, 
            value: changeWindowTitles, 
            onChange: onCheckBoxChanged 
        },
        { 
            type: 'checkbox', 
            label: 'Generate Shortcuts:',
            name: 'genShortcuts', 
            value: genShortcuts, 
            defaultValue: genShortcuts, 
            onChange: onCheckBoxChanged },
        { 
            type: 'checkbox', 
            label: 'Add to Startup:',
            name: 'addStartup', 
            value: addStartup, 
            defaultValue: addStartup, 
            onChange: onCheckBoxChanged 
        },
        { 
            type: 'checkbox', 
            label: 'Automatic Updates:',
            name: 'autoUpdate', 
            value: autoUpdate, 
            defaultValue: autoUpdate, 
            onChange: onCheckBoxChanged 
        },
    ];

    return {
        top,
        bottom,
    }
}