import { useEffect, useRef } from 'react';
import ReturnToHomeComponent from '../common/ReturnToHomeComponent';
import BuildMyPersonaBackground from '../common/BuildMyPersonaBackground';
import styles from './BuildMyPersona.module.scss';
import { pages } from '../data';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setSelectedPage } from '../features/build-my-persona/buildMyPersonaSlice';
import { FirstPageContent, SecondPageContent, ThirdPageContent, ForthPageContent } from '../features/build-my-persona';

export default function BuildMyPersona() {
  const dispatch = useAppDispatch();
  const selectedPersona = useAppSelector((state) => state.buildMyPersona.selectedPersona);
  const selectedPage = useAppSelector((state) => state.buildMyPersona.selectedPage);
  const pageRef = useRef<HTMLDivElement>(null);

  const onKeyDownChangeWebpageNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowRight' && selectedPage !== 6) {
      dispatch(setSelectedPage(selectedPage + 1));
    }
    if (e.key === 'ArrowLeft' && selectedPage !== 0) {
      dispatch(setSelectedPage(selectedPage - 1));
    }
  };

  const renderIndicator = () => {
    let result = [];
    for (let i = 0; i < 7; i++) {
      result.push(
        <span
          className={styles.indicator}
          style={{ backgroundColor: selectedPage === i ? 'white' : 'transparent' }}
          onClick={() => dispatch(setSelectedPage(i))}
          key={i}
        />
      );
    }
    return result;
  };

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  return (
    <div tabIndex={0} onKeyDown={onKeyDownChangeWebpageNumber} ref={pageRef}>
      <BuildMyPersonaBackground />
      <span className={styles.leftMainSpan}>
        <ReturnToHomeComponent />
        <div className={styles.leftProfile}>
          <div className={styles.profileBox}>
            <video className={styles.profileVideo} src={selectedPersona.video[selectedPage]} autoPlay />
          </div>
          <span className={styles.leftTitle}>Why Is This Step Important?</span>
          <span className={styles.leftDescription}>{pages[selectedPage].description}</span>
        </div>
        <div className={styles.leftPartBottom}>
          <div className={styles.indicatorBox}>{renderIndicator()}</div>
          <span className={styles.leftPartBottomButton}>Skip walkthrough mode</span>
        </div>
      </span>
      <span className={styles.rightMainSpan}>
        <div className={styles.rightTitleBox}>
          <h2>Step {pages[selectedPage].step} / 7: </h2>
          <span>{pages[selectedPage].title}</span>
        </div>
        <div className={styles.rightContentBox}>
          <div className={styles.content}>
            {selectedPage === 0 && <FirstPageContent />}
            {selectedPage === 1 && <SecondPageContent />}
            {selectedPage === 2 && <ThirdPageContent />}
            {selectedPage === 3 && <ForthPageContent />}
          </div>
        </div>
      </span>
      <div className={styles.pageButtons}>
        <span
          className={styles.pageButtonsEach}
          style={selectedPage === 0 ? { opacity: 0.3, pointerEvents: 'none' } : {}}
          onClick={() => selectedPage !== 0 && dispatch(setSelectedPage(selectedPage - 1))}
        >
          <ArrowPageChange />
        </span>
        <span
          className={styles.pageButtonsEach}
          style={selectedPage === 6 ? { opacity: 0.3, pointerEvents: 'none' } : {}}
          onClick={() => selectedPage !== 6 && dispatch(setSelectedPage(selectedPage + 1))}
        >
          <ArrowPageChange rightSided />
        </span>
      </div>
    </div>
  );
}

function ArrowPageChange({ rightSided = false }: { rightSided?: boolean }) {
  return (
    <span>
      <svg
        version="1.1"
        id="Layer_1___7qFbhi8C"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 40 40"
        enableBackground="new 0 0 40 40"
        xmlSpace="preserve"
        style={{ transform: rightSided ? 'rotate(180deg)' : '' }}
      >
        <path
          id="Combined-Shape___7qFbhi8C"
          fill="#FFFFFF"
          d="M3,40h34c1.65685,0,3-1.34315,3-3V3c0-1.65685-1.34315-3-3-3H3C1.34315,0,0,1.34315,0,3
	v34C0,38.65685,1.34315,40,3,40z"
        ></path>
        <path
          id="Icon_x2F_Actions_x2F_Carat-Left-S___7qFbhi8C"
          fill="#31465E"
          d="M23.62299,27.63345c-0.50268,0.48874-1.31519,0.48874-1.81787,0
	l-6.42811-6.24987c-0.50268-0.48874-0.50268-1.27872,0-1.76746l6.42811-6.24987C22.05582,13.1225,22.38494,13,22.71406,13
	s0.65824,0.1225,0.90894,0.36624c0.50268,0.48874,0.50268,1.27872,0,1.76746l-5.51918,5.36614l5.51918,5.36614
	C24.12567,26.35472,24.12567,27.14471,23.62299,27.63345"
        ></path>
      </svg>
    </span>
  );
}
