import styles from './SplashScreen.module.scss';
import { animated, useSpring, useSprings } from '@react-spring/web';
import HubspotLogo from '../assets/landing/hubspot-tools.svg';
import CopyrightComponent from '../common/CopyrightComponent';
import SplashScreenBackground from '../common/SplashScreenBackground';
import { fallIn as fallInSpring, rotateAndFall, fadeIn as fadeInSpring, MMP_TEXT } from '../common/TextAnimations';

import { useAppDispatch } from '../app/hooks';
import { setIsLoading } from '../features/landing-select/landingSelectSlice';

export default function SplashScreen() {
  const dispatch = useAppDispatch();

  const springs = useSprings(rotateAndFall.lengthOfText, rotateAndFall.delay);

  const renderMmp = () => {
    return springs.map((spring, i) => {
      return (
        <animated.span key={i} className={styles.mmp} style={spring}>
          {MMP_TEXT[i] === ' ' ? <>&nbsp;</> : MMP_TEXT[i]}
        </animated.span>
      );
    });
  };

  const fallIn = useSpring(fallInSpring);
  const fadeIn = useSpring(fadeInSpring);

  const tout = 3500 + MMP_TEXT.length * 150;
  new Promise((resolve) => setTimeout(resolve, tout)).then(() => {
    dispatch(setIsLoading(false));
  });

  return (
    <>
      <SplashScreenBackground />
      <div className={styles.mainDiv}>
        <animated.img src={HubspotLogo} alt="Hubspot Logo" className={styles.hubspotLogo} style={fallIn} />
        <div className={styles.mmpBox}>{renderMmp()}</div>
        <animated.h2 className={styles.mmpSubtitle} style={fadeIn}>
          A Buyer Persona Generator from HubSpot
        </animated.h2>
      </div>
      <CopyrightComponent />
    </>
  );
}
