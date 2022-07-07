import LandingBackground from '../common/LandingBackground';
import CopyrightComponent from '../common/CopyrightComponent';
import LandingSelect from '../features/landing-select/LandingSelect';
import LanguageDropdown from '../features/landing-select/LanguageDropdown';
import SplashScreen from './SplashScreen';

import { useAppSelector } from '../app/hooks';
import LearnMoreScreen from './LearnMoreScreen';

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
        </>
      )}
    </>
  );
}
