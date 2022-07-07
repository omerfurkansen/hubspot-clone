import styles from './LandingSelect.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentPage } from './landingSelectSlice';

export default function LandingSelect() {
  const { left, right } = useAppSelector((state) => state.landingSelect);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.mainDiv}>
      <div className={styles.selectDiv}>
        <img src={left.image} alt={left.imageAlt} className={styles.image} />
        <h2>{left.heading}</h2>
        <span className={styles.infoSpan}>{left.info}</span>
        <span
          className={`${styles.button} ${styles.buttonLeft}`}
          onClick={() => dispatch(setCurrentPage('learn-more'))}
        >
          {left.buttonText}
        </span>
      </div>
      <div className={styles.selectDiv}>
        <img src={right.image} alt={right.imageAlt} className={styles.image} />
        <h2>{right.heading}</h2>
        <span className={styles.infoSpan}>{right.info}</span>
        <span className={`${styles.button} ${styles.buttonRight}`}>{right.buttonText}</span>
      </div>
    </div>
  );
}
