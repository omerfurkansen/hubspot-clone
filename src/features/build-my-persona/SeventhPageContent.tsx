import styles from '../../pages/build-my-persona/BuildMyPersona.module.scss';
import { Facebook, Instagram, Twitter, LinkedIn, Pinterest } from '../../common/Svgs';
import InputComponent from '../../common/InputComponent';

const platforms = [
  { content: 'Facebook', image: <Facebook /> },
  { content: 'Instagram', image: <Instagram /> },
  { content: 'Twitter', image: <Twitter /> },
  { content: 'LinkedIn', image: <LinkedIn /> },
  { content: 'Pinterest', image: <Pinterest /> },
];

export default function SeventhPageContent() {
  return (
    <>
      <div className={styles.contentTitle}>How Do They Gain Information for Their Job?</div>
      <InputComponent placeholder={'E.g. do they take online courses or go to conferances?'} />
      <div className={styles.contentTitle}>What Social Networks Do They Belong To?</div>
      <div className={styles.circularButtonsBox}>
        {platforms.map((platform, index) => {
          return (
            <div key={index} className={styles.circularButtonsItem}>
              <div className={styles.circularButtonsItemImage}>{platform.image}</div>
              <div className={styles.circularButtonsItemTitle}>{platform.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
