import styles from '../../pages/build-my-persona/BuildMyPersona.module.scss';
import InputComponent from '../../common/InputComponent';
import SelectFormComponent from '../../common/SelectFormComponent';
import { useAppSelector } from '../../app/hooks';
import { setAdditionalBiggestChallenge } from './buildMyPersonaSlice';

const options = [
  'Navigating Client Relationships & Communications',
  'Resources',
  'Employee Morale',
  'Change Management',
  'Communication',
  'Collaboration & Creativity',
  'Project Management & Disorganization',
  'Professional Development',
  'Problem Solving & Decision Making',
];

export default function FifthPageContent() {
  const additionalBiggestChallenge = useAppSelector((state) => state.buildMyPersona.additionalBiggestChallenge);

  return (
    <>
      <div className={styles.contentTitle}>What Are Their Goals or Objectives?</div>
      <InputComponent placeholder={'E.g. Leads, Revenue, etc.'} />
      <div className={styles.contentTitle}>What Are Their Biggest Challenges?</div>
      <SelectFormComponent
        value={additionalBiggestChallenge}
        onChange={setAdditionalBiggestChallenge}
        options={options}
      />
      <div className={styles.contentTitle}>What Are Their Job Responsibilities?</div>
      <InputComponent placeholder={'E.g. people management, content creation, etc.'} />
    </>
  );
}
