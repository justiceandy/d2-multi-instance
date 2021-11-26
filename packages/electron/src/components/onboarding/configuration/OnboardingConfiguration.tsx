
import './OnboardingConfiguration.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import OnboardingFooter from '../layout/footer/OnboardingFooter'

export default function OnboardingConfiguration ({ automatedLogin, changeWindowTitles, notifications, api, appPath, desktop, installPath }:any) {
    console.log( notifications)
    return (
        <div className="OnBoardingContent">
            <div className="OnboardingPage OnboardingConfiguration">
            <h1>General Configuration</h1>
                <div className="TopConfigForm FormContainer">
                    <FormLabels 
                    items={[
                        'Settings File:',
                        'Error Log File:',
                        'Shortcut Directory:',
                    ]}
                    />
                    <FormValues
                        rows={[
                            /* @ts-expect-error */
                            { type: 'text', defaultValue: appPath  },
                            /* @ts-expect-error */
                            { type: 'text', defaultValue: installPath },
                            /* @ts-expect-error */
                            { type: 'text', defaultValue: desktop },
                        ]}
                    />
                </div>
                <div className="middleConfigForm FormContainer">
                    <FormLabels 
                    items={[
                        'API Enabled:',
                        'Automated Login:',
                        'Manage Window Titles:',
                    ]}
                    />
                    <FormValues
                        rows={[
                            /* @ts-expect-error */
                            { type: 'checkbox', value: api.enabled, defaultValue: api.enabled },
                            /* @ts-expect-error */
                            { type: 'checkbox', value: automatedLogin, defaultValue: api.enabled },
                            /* @ts-expect-error */
                            { type: 'checkbox', defaultValue: changeWindowTitles, value: changeWindowTitles },
                        ]}
                    />
                </div>
            </div>
            <OnboardingFooter previous="/" next="/accounts" />
        </div>
    );
  };