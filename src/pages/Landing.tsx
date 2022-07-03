import LandingBackground from '../common/LandingBackground';
import CopyrightComponent from '../common/CopyrightComponent';
import LandingSelect from '../features/landing-select/LandingSelect';
import LanguageDropdown from '../features/landing-select/LanguageDropdown';
import SplashScreen from './SplashScreen';

import { useAppSelector } from '../app/hooks';

export default function Landing() {
  const isLoading = useAppSelector((state) => state.landingSelect.isLoading);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <LandingBackground />
          <LanguageDropdown />
          <LandingSelect />
          <CopyrightComponent />
        </>
      )}
    </>
  );
}
