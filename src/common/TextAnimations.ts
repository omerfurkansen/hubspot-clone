const INITIAL_OBJECT_ANIMATION_DURATION = 1000;
const MMP_TEXT = 'Make My Persona';

const fallIn = {
  from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
  to: { opacity: 1, transform: 'translate3d(0,0,0)' },
  config: { duration: INITIAL_OBJECT_ANIMATION_DURATION },
};

const rotateAndFall = {
  from: { opacity: 0, transform: 'translate3d(0,-300%,0) rotate(-60deg)' },
  to: { opacity: 1, transform: 'translate3d(0,0,0) rotate(0deg)' },
  config: { mass: 5, tension: 8000, friction: 200 },
};

const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
  config: { duration: 1000 },
  delay: INITIAL_OBJECT_ANIMATION_DURATION + MMP_TEXT.split('').length * 150,
};

export const TextAnimations = {
  fallIn,
  rotateAndFall,
  fadeIn,
}