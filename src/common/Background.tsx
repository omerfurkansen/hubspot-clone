import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv} />
      <div className={styles.rightDiv}>
        <svg viewBox="0 0 88 1024" orientation="vertical" className={styles.curvedSvg}>
          <path d="M0,0h45.07891c58.40593,190.38815,58.40593,361.05481,0,512s-58.40593,321.61188,0,512H0V0z" />
        </svg>
      </div>
    </div>
  );
}
