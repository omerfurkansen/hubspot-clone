import styles from './BuildMyPersonaBackground.module.css';

export default function BuildMyPersonaBackground() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv} />
      <div className={styles.rightDiv}>
        <svg viewBox="0 0 88 1024" orientation="vertical" className={styles.curvedSvg}>
          <path d="M0,0h21.86328c28,140,28,310.66666,0,512s-28,372,0,512H0V0z"></path>
        </svg>
      </div>
    </div>
  );
}
