import { useState } from 'react';
import styles from '../../pages/BuildMyPersona.module.scss';
import RangeComponent from '../../common/RangeComponent';

export default function SecondPageContent() {
  const [firstRangeValues, setFirstRangeValues] = useState([0]);
  const [secondRangeValues, setSecondRangeValues] = useState([0]);

  return (
    <>
      <div className={styles.contentTitle}>How Old Are They?</div>
      <div className={styles.contentAgePickerBox}>
        <RangeComponent values={firstRangeValues} texts={ages} setValues={setFirstRangeValues} />
      </div>
      <div className={styles.contentTitle}>
        What is the highest degree or level of school your persona has completed?
      </div>
      <div className={styles.contentAgePickerBox}>
        <RangeComponent values={secondRangeValues} texts={educationLevels} setValues={setSecondRangeValues} />
      </div>
    </>
  );
}

const ages = [
  'Under 18 years',
  '18 to 24 years',
  '25 to 34 years',
  '35 to 44 years',
  '45 to 54 years',
  '55 to 64 years',
  'Age 65 or older',
];

const educationLevels = [
  'Less than a high school diploma',
  'High school degree or equivalent (e.g. GED)',
  'Some college, no degree',
  'Associate degree (e.g. AA, AS)',
  'Bachelor’s degree (e.g. BA, BS)',
  'Master’s degree (e.g. MA, MS, MEd)',
  'Professional degree (e.g. MD, DDS, DVM)',
  'Doctorate degree (e.g. PhD, EdD)',
];
