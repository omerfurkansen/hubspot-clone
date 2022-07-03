import { useState } from 'react';
import Background from '../common/Background';
import CopyrightComponent from '../common/CopyrightComponent';
import LandingSelect from '../features/landing-select/LandingSelect';
import LanguageDropdown from '../features/landing-select/LanguageDropdown';

import SplashScreen from './SplashScreen';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Landing() {
  const [showScreens, setShowScreensTo] = useState(false);
  // sleep(3000).then(() => setShowScreensTo(true));
  return (
    <>
      {!showScreens && <SplashScreen />}
      {/* {showScreens && (
        <>
          <Background />
          <LanguageDropdown />
          <LandingSelect />
          <CopyrightComponent />
        </>
      )} */}
    </>
  );
}
