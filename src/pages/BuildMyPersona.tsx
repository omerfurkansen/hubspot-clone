import { useEffect, useRef, useState } from 'react';
import ReturnToHomeComponent from '../common/ReturnToHomeComponent';
import BuildMyPersonaBackground from '../common/BuildMyPersonaBackground';
import styles from './BuildMyPersona.module.scss';
import { profiles, pages } from '../data';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setSelectedPersona, setSelectedPage } from '../features/build-my-persona/buildMyPersonaSlice';
import { Range, getTrackBackground } from 'react-range';

function FirstPageContent() {
  const dispatch = useAppDispatch();
  const selectedPersona = useAppSelector((state) => state.buildMyPersona.selectedPersona);

  const [personaName, setPernameNameTo] = useState('');
  const [showPencil, setShowPencilTo] = useState(false);

  const onChangePersonaName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPernameNameTo(e.target.value);
  };

  return (
    <>
      <div className={styles.contentTitle}>Name Your Persona</div>
      <span className={styles.contentInputBox}>
        <span className={styles.contentInputSpan}></span>
        <input
          type="text"
          placeholder="Name Your Persona"
          className={styles.contentInput}
          value={personaName}
          onChange={onChangePersonaName}
          onFocus={() => setShowPencilTo(true)}
          onBlur={() => setShowPencilTo(false)}
        />
        <div
          className={styles.contentInputPen}
          style={{ opacity: showPencil ? 1 : 0, transform: showPencil ? 'translateY(50%)' : 'translateY(100%)' }}
        >
          <PencilSpan />
        </div>
      </span>
      <div className={styles.contentTitle}>Pick Your Avatar</div>
      <div className={styles.profileImagesBox}>
        {Object.values(profiles).map((profile, index) => (
          <div key={index} className={styles.profileImageDiv} onClick={() => dispatch(setSelectedPersona(profile))}>
            <div
              className={styles.profileImageCoverage}
              style={{
                backgroundColor: profile.color,
                boxShadow: selectedPersona.id === index ? 'rgb(255 255 255) 0px 0px 0px 3px' : '',
              }}
            >
              <img src={profile.photo} className={styles.profileImage} alt="profile" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SecondPageContent() {
  const [values, setValues] = useState([0]);
  const [valuesForSecond, setValuesForSecond] = useState([0]);
  const texts = [
    'Under 18 years',
    '18 to 24 years',
    '25 to 34 years',
    '35 to 44 years',
    '45 to 54 years',
    '55 to 64 years',
    'Age 65 or older',
  ];

  const textsSecond = [
    'Less than a high school diploma',
    'High school degree or equivalent (e.g. GED)',
    'Some college, no degree',
    'Associate degree (e.g. AA, AS)',
    'Bachelor’s degree (e.g. BA, BS)',
    'Master’s degree (e.g. MA, MS, MEd)',
    'Professional degree (e.g. MD, DDS, DVM)',
    'Doctorate degree (e.g. PhD, EdD)',
  ];

  function showText(number: number) {
    const limit = 100 / 7;
    if (number > limit * 6) {
      return texts[6];
    }
    if (number > limit * 5) {
      return texts[5];
    }
    if (number > limit * 4) {
      return texts[4];
    }
    if (number > limit * 3) {
      return texts[3];
    }
    if (number > limit * 2) {
      return texts[2];
    }
    if (number > limit) {
      return texts[1];
    }
    return texts[0];
  }

  function showTextForSecond(number: number) {
    const limit = 100 / 8;
    if (number > limit * 7) {
      return textsSecond[7];
    }
    if (number > limit * 6) {
      return textsSecond[6];
    }
    if (number > limit * 5) {
      return textsSecond[5];
    }
    if (number > limit * 4) {
      return textsSecond[4];
    }
    if (number > limit * 3) {
      return textsSecond[3];
    }
    if (number > limit * 2) {
      return textsSecond[2];
    }
    if (number > limit) {
      return textsSecond[1];
    }
    return textsSecond[0];
  }
  return (
    <>
      <div className={styles.contentTitle}>How Old Are They?</div>
      <div className={styles.contentAgePickerBox}>
        <Range
          min={0}
          max={100}
          step={0.01}
          values={values}
          onChange={(values) => {
            setValues(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              ref={props.ref}
              style={{
                height: '0.2rem',
                background: getTrackBackground({
                  values,
                  colors: ['rgb(255, 255, 255)', 'rgba(203, 214, 226, .2)'],
                  min: 0,
                  max: 100,
                }),
                cursor: 'pointer',
              }}
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                height: '1.5rem',
                width: '1.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgb(255, 255, 255)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '10em',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 15,
                  textAlign: 'center',
                  transform: 'translate(-50%, -125%)',
                  willChange: 'transform',
                }}
              >
                {showText(values[0])}
              </div>
            </div>
          )}
        />
      </div>
      <div className={styles.contentTitle}>
        What is the highest degree or level of school your persona has completed?
      </div>
      <div className={styles.contentAgePickerBox}>
        <Range
          min={0}
          max={100}
          step={0.01}
          values={valuesForSecond}
          onChange={(values) => {
            setValuesForSecond(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              ref={props.ref}
              style={{
                height: '0.2rem',
                background: getTrackBackground({
                  values: valuesForSecond,
                  colors: ['rgb(255, 255, 255)', 'rgba(203, 214, 226, .2)'],
                  min: 0,
                  max: 100,
                }),
                cursor: 'pointer',
              }}
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                height: '1.5rem',
                width: '1.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgb(255, 255, 255)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '10em',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 15,
                  textAlign: 'center',
                  transform: 'translate(-50%, -125%)',
                  willChange: 'transform',
                }}
              >
                {showTextForSecond(valuesForSecond[0])}
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
}

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
          onClick={() => setSelectedPage(i)}
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
            {/* <FirstPageContent /> */}
            <SecondPageContent />
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

function PencilSpan() {
  return (
    <span>
      <svg
        version="1.1"
        id="Layer_1___bjfNa359"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 14.13147 14.13062"
        enableBackground="new 0 0 14.13147 14.13062"
        xmlSpace="preserve"
        className={styles.penSvg}
      >
        <g>
          <path
            d="M10.5882,5.70361l-6.15601,6.15601l-0.65503-0.65503c0.03204-0.021,0.06799-0.03497,0.09601-0.06299
		L9.9502,5.06458c0.24298-0.24396,0.24298-0.63898,0-0.883c-0.24402-0.245-0.64001-0.245-0.88501,0l-6.07703,6.07605
		c-0.02802,0.02795-0.04102,0.06396-0.06299,0.09497L2.27118,9.69861L8.42719,3.5426c0.24298-0.24402,0.24298-0.64001,0-0.88397
		c-0.24402-0.24402-0.64099-0.24402-0.88501,0L0.94416,9.25659c-0.00397,0.005-0.00598,0.01099-0.00995,0.01599
		c-0.01202,0.013-0.01801,0.02899-0.02802,0.04303c-0.052,0.065-0.09003,0.13898-0.11304,0.22101
		C0.78919,9.55157,0.77716,9.56158,0.7732,9.5766l-0.76105,3.80603c-0.04095,0.20496,0.02301,0.41699,0.17102,0.565
		c0.11902,0.11798,0.27802,0.18298,0.44202,0.18298c0.04102,0,0.08197-0.00403,0.12299-0.01202l3.80701-0.76196
		c0.01398-0.00201,0.02399-0.01501,0.03802-0.01904c0.08099-0.02197,0.15497-0.06,0.21997-0.11096
		c0.01398-0.01105,0.03198-0.01703,0.04602-0.03003c0.00397-0.005,0.01099-0.00598,0.01495-0.01001l6.599-6.599
		c0.24304-0.24396,0.24304-0.63995,0-0.88397C11.22919,5.45959,10.83216,5.45959,10.5882,5.70361z"
          ></path>
          <path
            d="M13.65546,2.10651l-1.63098-1.63098c-0.63501-0.63403-1.664-0.63403-2.29901,0L9.0315,1.16949
		c-0.24304,0.245-0.24304,0.64001,0,0.88403l3.04498,3.04498c0.12201,0.12201,0.28198,0.18298,0.44202,0.18298
		c0.15997,0,0.32098-0.06097,0.44299-0.18298l0.69299-0.69403c0.30798-0.30701,0.47699-0.71497,0.47699-1.14899
		S13.96247,2.41351,13.65546,2.10651z"
          ></path>
        </g>
      </svg>
    </span>
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
