
import './OnboardingConfiguration.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import OnboardingConfigFormRows from './libs/form';
export default function OnboardingConfiguration (props:any) {
    const formRows = OnboardingConfigFormRows({ ...props });

    return (
        <div className="OnBoardingContent">
            <div className="OnboardingPage OnboardingConfiguration">
            <h1>General Configuration</h1>
                <div className="TopConfigForm FormContainer">
                    <FormLabels items={formRows.top.map(({ label }:any) => label)} />
                    <FormValues 
                        /* @ts-expect-error */
                        rows={formRows.top} />
                </div>
                <div className="MiddleConfigForm FormContainer">
                    <FormLabels items={formRows.bottom.map(({ label }:any) => label)} />
                    <FormValues
                        /* @ts-expect-error */
                        rows={formRows.bottom}
                    />
                </div>
            </div>
        </div>
    );
  };