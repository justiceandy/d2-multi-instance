
import './OnboardingIntroduction.css';
import OnboardingFooter from '../layout/footer/OnboardingFooter'

// 
export default function OnboardingIntroduction (state:any) {
    console.log(state)
    return (
        <div className="OnBoardingContent">
            <div className="OnboardingPage">
                <div className="OnboardingPageContent">
                    <div className="intro">
                        <h3>Welcome</h3>
                        <p>Thanks for checking out D2R Multi Launcher, configure your settings to get started.</p>
                    </div>
                    <div className="about">
                        <p>The goal of this launcher is to keep multiple accounts authenticated and provide some useful
                            tools for multiboxing. It does not provide multi key inputs or inject into the game process.
                        </p>
                        <p>There may be future updates that read game memory for simple things like Game IP/Stash etc.</p>
                        <p>These features will be added as integrations that users will need to opt into using.</p>
                    </div>
                    <div className="legal">
                        <h4>Legal Disclaimer:</h4>
                        <p>This is obviously not affiliated with Blizzard and all Diablo copyright belongs to them.</p>
                        <p>Useage is at your own risk.</p>
                        <p> This utility could classify as an 3rd Party tool that grants an advantage 
                        not provided to every player</p>
                    </div>
            </div>
        </div>
        <OnboardingFooter next="/configuration" />
    </div>
    );
  };