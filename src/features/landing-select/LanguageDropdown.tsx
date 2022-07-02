import { useState } from 'react';
import styles from './LanguageDropdown.module.scss';

export default function LanguageDropdown() {
  const [isOpen, setIsOpenTo] = useState(false);

  return (
    <div className={styles.mainDiv} onClick={() => setIsOpenTo(!isOpen)}>
      <div className={styles.selectDiv}>
        <div className={styles.earthDiv}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 12 15.75"
            enableBackground="new 0 0 12 15.75"
            xmlSpace="preserve"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.72425,4.33737
	c0.51648,1.83251,0.30276,3.75728-0.60186,5.42072c-0.90515,1.66344-2.39487,2.86929-4.19416,3.39515
	c-0.46514,0.136-0.93657,0.2208-1.408,0.25813v1.27198h2.44253c0.28967,0,0.52381,0.23893,0.52381,0.53333
	c0,0.29493-0.23414,0.53333-0.52381,0.53333H2.03008c-0.28967,0-0.52381-0.2384-0.52381-0.53333
	c0-0.2944,0.23414-0.53333,0.52381-0.53333h2.44253v-1.28158c-0.99524-0.07467-1.97162-0.3552-2.86891-0.86132
	c-0.25352-0.1424-0.34467-0.46719-0.20481-0.72479c0.14038-0.2576,0.45991-0.35093,0.71186-0.20853
	c1.38915,0.78399,2.99829,0.96745,4.52835,0.52106c1.53058-0.44746,2.79768-1.47251,3.56663-2.88689
	c0.76896-1.41438,0.95124-3.05115,0.51176-4.60953C10.27801,3.07286,9.27072,1.78328,7.8821,0.99982
	c-0.253-0.14293-0.34467-0.46719-0.20481-0.72479c0.14038-0.25813,0.45938-0.3504,0.71238-0.20853
	C10.02344,0.98809,11.20777,2.50487,11.72425,4.33737z M10,6.23438c0,2.71383-2.24298,4.92188-4.99973,4.92188S0,8.9482,0,6.23438
	S2.24352,1.3125,5.00027,1.3125S10,3.52055,10,6.23438z"
            ></path>
          </svg>
        </div>
        <span className={styles.selectedLanguage}>English</span>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : styles.arrowClose}`}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 10 5"
            enableBackground="new 0 0 10 5"
            xmlSpace="preserve"
          >
            <polygon id="Triangle-1" fillRule="evenodd" clipRule="evenodd" points="5,5 0,0 10,0 "></polygon>
          </svg>
        </div>
      </div>
      <div
        className={`${styles.allSelectionsDiv} ${
          isOpen ? styles.allSelectionsDivVisible : styles.allSelectionsDivHidden
        }`}
      >
        <a>Deutsch</a>
        <a>English</a>
        <a>Español</a>
        <a>Português</a>
        <a>Français</a>
      </div>
    </div>
  );
}
