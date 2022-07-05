import ReturnToHomeComponent from '../common/ReturnToHomeComponent';
import SocialIconsComponent from '../common/SocialIconsComponent';
import SplashScreenBackground from '../common/SplashScreenBackground';
import styles from './LearnMoreScreen.module.scss';

export default function LearnMoreScreen() {
  return (
    <div>
      <SplashScreenBackground />
      <ReturnToHomeComponent />
      <SocialIconsComponent />
      <div className={styles.contentBox}>
        <svg viewBox="0 0 982 784" className={styles.whiteBalloon}>
          <path
            d="M280.33249,765.99994c224.27161,71.90973,524.10767-86.09637,653.81995-224.70612 S913.26697,101.06599,688.99542,29.15626S199.6246,24.98001,57.99081,176.3291S56.06094,694.09021,280.33249,765.99994z"
            data-original="M702.28522,765.99994c-224.27164,71.90973-524.10773-86.09637-653.81995-224.70612 S69.35072,101.06599,293.62225,29.15626s489.37079-4.17624,631.00464,147.17285S926.55676,694.09021,702.28522,765.99994z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
