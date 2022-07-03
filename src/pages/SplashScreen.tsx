import styles from './SplashScreen.module.css';
import { animated, useSpring, useSprings } from '@react-spring/web';
import HubspotLogo from '../assets/landing/hubspot-tools.svg';
import CopyrightComponent from '../common/CopyrightComponent';

const INITIAL_OBJECT_ANIMATION_DURATION = 1000;

export default function SplashScreen() {
  const text = 'Make My Persona'.split('');

  const rotateAndFall = {
    config: { mass: 5, tension: 8000, friction: 200 },
    from: { opacity: 0, transform: 'translate3d(0,-300%,0) rotate(-60deg)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0) rotate(0deg)' },
  };

  const springs = useSprings(
    text.length,
    text.map((t, i) => ({ ...rotateAndFall, delay: INITIAL_OBJECT_ANIMATION_DURATION + 150 * i }))
  );

  const renderMmp = () => {
    return springs.map((s, i) => {
      return (
        <animated.span key={`char${i}`} className={styles.mmp} style={s}>
          {text[i] === ' ' ? <>&nbsp;</> : text[i]}
        </animated.span>
      );
    });
  };

  const fallIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: INITIAL_OBJECT_ANIMATION_DURATION },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: INITIAL_OBJECT_ANIMATION_DURATION + text.length * 150,
  });

  return (
    <div className={styles.mainDiv}>
      <animated.img src={HubspotLogo} alt="Hubspot Logo" className={styles.hubspotLogo} style={fallIn} />
      <div className={styles.mmpBox}>{renderMmp()}</div>
      <animated.h2 className={styles.mmpSubtitle} style={fadeIn}>
        A Buyer Persona Generator from HubSpot
      </animated.h2>
      <CopyrightComponent />
    </div>
  );
}
