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

function BuildMyPersonaLeftPart() {
  return <span></span>;
}

export default function BuildMyPersona() {
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
    </div>
  );
}
