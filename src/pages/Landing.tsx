import Background from '../common/Background';
import CopyrightComponent from '../common/CopyrightComponent';
import LandingSelect from '../features/landing-select/LandingSelect';
import LanguageDropdown from '../features/landing-select/LanguageDropdown';

export default function Landing() {
  return (
    <>
      <Background />
      <LanguageDropdown />
      <LandingSelect />
      <CopyrightComponent />
    </>
  );
}
