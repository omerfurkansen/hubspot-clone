import InputComponent from '../../common/InputComponent';
import styles from '../../pages/build-my-persona/BuildMyPersona.module.scss';

export default function ForthPageContent() {
  return (
    <>
      <div className={styles.contentTitle}>What Is Their Job Title?</div>
      <InputComponent placeholder="E.g. Sales Rep" />
      <div className={styles.contentTitle}>How Is Their Job Measured?</div>
      <InputComponent placeholder="E.g. Leads generated, revenue generated, team productivity, etc." />
      <div className={styles.contentTitle}>Who Do They Report To?</div>
      <InputComponent placeholder="E.g. CEO, President, Director, etc." />
    </>
  );
}
