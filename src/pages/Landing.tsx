import LandingBackground from '../common/landing-background/LandingBackground';
import CopyrightComponent from '../common/copyright-component/CopyrightComponent';
import LandingSelect from '../features/landing-select/LandingSelect';
import LanguageDropdown from '../features/landing-select/LanguageDropdown';
import SplashScreen from './splash-screen/SplashScreen';

import { useAppSelector } from '../app/hooks';
import LearnMoreScreen from './learn-more/LearnMoreScreen';
import BuildMyPersona from './build-my-persona/BuildMyPersona';

export default function Landing() {
  const isLoading = useAppSelector((state) => state.landingSelect.isLoading);
  const currentPage = useAppSelector((state) => state.landingSelect.currentPage);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          {currentPage === 'landing' && (
            <>
              <LandingBackground />
              <LanguageDropdown />
              <LandingSelect />
              <CopyrightComponent />
            </>
          )}
          {currentPage === 'learn-more' && <LearnMoreScreen />}
          {currentPage === 'build-my-persona' && <BuildMyPersona />}
        </>
      )}
    </>
  );
}
