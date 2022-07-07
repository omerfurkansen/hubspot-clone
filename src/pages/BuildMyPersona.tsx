import ReturnToHomeComponent from '../common/ReturnToHomeComponent';
import BuildMyPersonaBackground from '../common/BuildMyPersonaBackground';
import styles from './BuildMyPersona.module.scss';

import AvatarVideo0 from '../assets/pages/1/videos/avatar-step-0.mp4';
import AvatarVideo1 from '../assets/pages/1/videos/avatar-step-1.mp4';
import AvatarVideo2 from '../assets/pages/1/videos/avatar-step-2.mp4';
import AvatarVideo3 from '../assets/pages/1/videos/avatar-step-3.mp4';
import AvatarVideo4 from '../assets/pages/1/videos/avatar-step-4.mp4';
import AvatarVideo5 from '../assets/pages/1/videos/avatar-step-5.mp4';
import AvatarVideo6 from '../assets/pages/1/videos/avatar-step-6.mp4';
import AvatarVideo7 from '../assets/pages/1/videos/avatar-step-7.mp4';
import AvatarVideo8 from '../assets/pages/1/videos/avatar-step-8.mp4';
import AvatarVideo9 from '../assets/pages/1/videos/avatar-step-9.mp4';
import AvatarVideo10 from '../assets/pages/1/videos/avatar-step-10.mp4';
import AvatarVideo11 from '../assets/pages/1/videos/avatar-step-11.mp4';
import AvatarVideo12 from '../assets/pages/1/videos/avatar-step-12.mp4';
import AvatarVideo13 from '../assets/pages/1/videos/avatar-step-13.mp4';
import AvatarVideo14 from '../assets/pages/1/videos/avatar-step-14.mp4';

import ProfilePhoto0 from '../assets/pages/1/profiles/avatar-0.svg';
import ProfilePhoto1 from '../assets/pages/1/profiles/avatar-1.svg';
import ProfilePhoto2 from '../assets/pages/1/profiles/avatar-2.svg';
import ProfilePhoto3 from '../assets/pages/1/profiles/avatar-3.svg';
import ProfilePhoto4 from '../assets/pages/1/profiles/avatar-4.svg';
import ProfilePhoto5 from '../assets/pages/1/profiles/avatar-5.svg';
import ProfilePhoto6 from '../assets/pages/1/profiles/avatar-6.svg';
import ProfilePhoto7 from '../assets/pages/1/profiles/avatar-7.svg';
import ProfilePhoto8 from '../assets/pages/1/profiles/avatar-8.svg';
import ProfilePhoto9 from '../assets/pages/1/profiles/avatar-9.svg';
import ProfilePhoto10 from '../assets/pages/1/profiles/avatar-10.svg';
import ProfilePhoto11 from '../assets/pages/1/profiles/avatar-11.svg';
import ProfilePhoto12 from '../assets/pages/1/profiles/avatar-12.svg';
import ProfilePhoto13 from '../assets/pages/1/profiles/avatar-13.svg';
import ProfilePhoto14 from '../assets/pages/1/profiles/avatar-14.svg';

import { useState } from 'react';

const COLORS = {
  ORANGE: 'rgb(253, 122, 89)',
  GREEN: 'rgb(127, 222, 210)',
  PURPLE: 'rgb(180, 187, 232)',
  PINK: 'rgb(249, 170, 190)',
  YELLOW: 'rgb(245, 194, 107)',
};

export default function BuildMyPersona() {
  const [personaName, setPernameNameTo] = useState('');
  const [showPencil, setShowPencilTo] = useState(false);

  const [personaAvatar, setPersonaAvatarTo] = useState(ProfilePhoto0);

  const profileImages = [
    ProfilePhoto0,
    ProfilePhoto1,
    ProfilePhoto2,
    ProfilePhoto3,
    ProfilePhoto4,
    ProfilePhoto5,
    ProfilePhoto6,
    ProfilePhoto7,
    ProfilePhoto8,
    ProfilePhoto9,
    ProfilePhoto10,
    ProfilePhoto11,
    ProfilePhoto12,
    ProfilePhoto13,
    ProfilePhoto14,
  ];

  const onChangePersonaName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPernameNameTo(e.target.value);
  };

  return (
    <div>
      <BuildMyPersonaBackground />
      <span className={styles.leftMainSpan}>
        <ReturnToHomeComponent />
        <div className={styles.leftProfile}>
          <div className={styles.profileBox}>
            <video className={styles.profileVideo} autoPlay>
              <source src={AvatarVideo0} type="video/mp4" />
            </video>
          </div>
          <span className={styles.leftTitle}>Why Is This Step Important?</span>
          <span className={styles.leftDescription}>
            Start by choosing a name to humanize your buyer persona. Both the name and the avatar you select will help
            you start thinking about this persona like a real person. Pro tip: Consider naming your buyer persona with
            their industry in mind to make it easier to remember, like Marketing Mary or Finance Fred
          </span>
        </div>
      </span>
      <span className={styles.rightMainSpan}>
        <div className={styles.rightTitleBox}>
          <h2>Step 1 / 7: </h2>
          <span>Create Your Avatar</span>
        </div>
        <div className={styles.rightContentBox}>
          <div className={styles.content}>
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
              </div>
            </span>
            <div className={styles.contentTitle}>Pick Your Avatar</div>
            <div className={styles.profileImagesBox}>
              {profileImages.map((image, index) => (
                <div key={index} className={styles.profileImageDiv} onClick={() => setPersonaAvatarTo(image)}>
                  <div
                    className={styles.profileImageCoverage}
                    style={{ backgroundColor: Object.values(COLORS)[index % 5] }}
                  >
                    <img src={image} className={styles.profileImage} alt="profile" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
