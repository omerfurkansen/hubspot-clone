import ReturnToHomeComponent from '../../common/return-to-home-component/ReturnToHomeComponent';
import SocialIconsComponent from '../../common/social-icons-component/SocialIconsComponent';
import SplashScreenBackground from '../../common/splash-screen-background/SplashScreenBackground';
import styles from './LearnMoreScreen.module.scss';
import { Carousel } from 'react-responsive-carousel';
import Video0 from '../../assets/learn-more/education-0.mp4';
import Video1 from '../../assets/learn-more/education-1.mp4';
import Video2 from '../../assets/learn-more/education-2.mp4';
import Video3 from '../../assets/learn-more/education-3.mp4';
import { AnimationHandler, AnimationHandlerResponse } from 'react-responsive-carousel/lib/ts/components/Carousel/types';

function BackgroundWhiteBalloon() {
  return (
    <svg viewBox="0 0 982 784" className={styles.whiteBalloon}>
      <path
        d="M280.33249,765.99994c224.27161,71.90973,524.10767-86.09637,653.81995-224.70612 S913.26697,101.06599,688.99542,29.15626S199.6246,24.98001,57.99081,176.3291S56.06094,694.09021,280.33249,765.99994z"
        data-original="M702.28522,765.99994c-224.27164,71.90973-524.10773-86.09637-653.81995-224.70612 S69.35072,101.06599,293.62225,29.15626s489.37079-4.17624,631.00464,147.17285S926.55676,694.09021,702.28522,765.99994z"
      ></path>
    </svg>
  );
}

const fadeAnimationHandler: AnimationHandler = (props, state): AnimationHandlerResponse => {
  const transitionTime = props.transitionTime + 'ms';
  const transitionTimingFunction = 'ease-in-out';

  let slideStyle: React.CSSProperties = {
    position: 'absolute',
    display: 'block',
    zIndex: -2,
    minHeight: '100%',
    opacity: 0,
    top: 0,
    left: 0,
    transform: 'scale(0.8)',
    transitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      transitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: 'relative', transform: 'scale(1)' },
    prevStyle: { ...slideStyle },
  };
};

export default function LearnMoreScreen() {
  const carouselContent = [
    {
      title: 'What Is a Buyer Persona?',
      content:
        'A buyer persona is a semi-fictional representation of your ideal customer based on market research and real data about your existing customers.',
      video: Video0,
    },
    {
      title: 'Why Use a Buyer Persona?',
      content:
        'Buyer personas provide structure and context for your company, making it easier to map out content, allocate your team’s time and resources, and achieve alignment across your organization.',
      video: Video1,
    },
    {
      title: 'How Should I Use a Persona?',
      content:
        'Learning about your ideal customer -- their challenges, their goals, their demographic traits, and so on  -- helps you set a strategy aimed at attracting the most valuable visitors, leads, and customers to your business.',
      video: Video2,
    },
    {
      title: 'How Do I Create a Persona?',
      content:
        'Download a detailed persona creation guide -- complete with information to help you conduct customer outreach, complete persona research, and more.',
      video: Video3,
    },
  ];

  return (
    <div>
      <SplashScreenBackground />
      <ReturnToHomeComponent />
      <SocialIconsComponent />
      <div className={styles.contentBox}>
        <BackgroundWhiteBalloon />
        <Carousel
          showThumbs={false}
          animationHandler={fadeAnimationHandler}
          showStatus={false}
          autoFocus
          useKeyboardArrows
          className={styles.carouselBox}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <span className={`${styles.arrow} ${styles.arrowLeft}`} onClick={clickHandler}>
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1___GCjYYVfU"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 40 40"
                    enableBackground="new 0 0 40 40"
                    xmlSpace="preserve"
                    style={{ width: '2.5rem', height: '100%' }}
                  >
                    <path
                      id="Combined-Shape___GCjYYVfU"
                      fill="#FFFFFF"
                      d="M3,40h34c1.65685,0,3-1.34315,3-3V3c0-1.65685-1.34315-3-3-3H3C1.34315,0,0,1.34315,0,3
            v34C0,38.65685,1.34315,40,3,40z"
                    ></path>
                    <path
                      id="Icon_x2F_Actions_x2F_Carat-Left-S___GCjYYVfU"
                      fill="#31465E"
                      d="M23.62299,27.63345c-0.50268,0.48874-1.31519,0.48874-1.81787,0
            l-6.42811-6.24987c-0.50268-0.48874-0.50268-1.27872,0-1.76746l6.42811-6.24987C22.05582,13.1225,22.38494,13,22.71406,13
            s0.65824,0.1225,0.90894,0.36624c0.50268,0.48874,0.50268,1.27872,0,1.76746l-5.51918,5.36614l5.51918,5.36614
            C24.12567,26.35472,24.12567,27.14471,23.62299,27.63345"
                    ></path>
                  </svg>
                </span>
              </span>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <span className={`${styles.arrow} ${styles.arrowRight}`} onClick={clickHandler}>
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1___GCjYYVfU"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 40 40"
                    enableBackground="new 0 0 40 40"
                    xmlSpace="preserve"
                    style={{ width: '2.5rem', height: '100%', transform: 'rotate(180deg)' }}
                  >
                    <path
                      id="Combined-Shape___GCjYYVfU"
                      fill="#FFFFFF"
                      d="M3,40h34c1.65685,0,3-1.34315,3-3V3c0-1.65685-1.34315-3-3-3H3C1.34315,0,0,1.34315,0,3
            v34C0,38.65685,1.34315,40,3,40z"
                    ></path>
                    <path
                      id="Icon_x2F_Actions_x2F_Carat-Left-S___GCjYYVfU"
                      fill="#31465E"
                      d="M23.62299,27.63345c-0.50268,0.48874-1.31519,0.48874-1.81787,0
            l-6.42811-6.24987c-0.50268-0.48874-0.50268-1.27872,0-1.76746l6.42811-6.24987C22.05582,13.1225,22.38494,13,22.71406,13
            s0.65824,0.1225,0.90894,0.36624c0.50268,0.48874,0.50268,1.27872,0,1.76746l-5.51918,5.36614l5.51918,5.36614
            C24.12567,26.35472,24.12567,27.14471,23.62299,27.63345"
                    ></path>
                  </svg>
                </span>
              </span>
            )
          }
          renderIndicator={(clickHandler, isSelected, index) => (
            <span
              className={styles.indicator}
              style={{ backgroundColor: isSelected ? 'white' : 'transparent' }}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              key={index}
              role="button"
              tabIndex={0}
            />
          )}
        >
          {carouselContent.map((content, index) => (
            <div key={index} className={styles.carouselEach}>
              <span className={styles.carouselTitle}>{content.title}</span>
              <video autoPlay loop muted className={styles.carouselVideo} src={content.video} />
              <span className={styles.carouselContent}>{content.content}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
