import styles from '../../pages/BuildMyPersona.module.scss';
import InputComponent from '../../common/InputComponent';
import { useState } from 'react';

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

function SelectFormComponent() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // const handleClick = (e: any) => {
  //   const { value } = e.target;
  //   if (selectedOptions.includes(value)) {
  //     setSelectedOptions(selectedOptions.filter((option) => option !== value));
  //   } else {
  //     setSelectedOptions([...selectedOptions, value]);
  //   }
  // }

  return (
    <div className={styles.selectFormContainer}>
      <div className={styles.selectFormMain}>
        {options.map((option, index) => (
          <span key={index} className={styles.selectFormSelection}>
            <span
              className={styles.selectFormSelectionBox}
              onClick={() =>
                setSelectedOptions(
                  selectedOptions.includes(option)
                    ? selectedOptions.filter((selectedOption) => selectedOption !== option)
                    : [...selectedOptions, option]
                )
              }
            >
              <svg
                style={{ transform: selectedOptions.includes(option) ? '' : 'scale(0)' }}
                viewBox="0 0 14.62667 11.2107"
              >
                <path d="M0,5.60535c0-0.25141,0.08794-0.46448,0.26381-0.64035l1.28522-1.28522 C1.72377,3.50503,1.93797,3.4171,2.18938,3.4171c0.25141,0,0.46561,0.08681,0.64261,0.26268l2.77336,2.78464l6.19159-6.20061 C11.97281,0.08794,12.18701,0,12.43729,0c0.25253,0,0.46561,0.08681,0.64261,0.26268l1.28296,1.28522 c0.17587,0.17474,0.26381,0.38895,0.26381,0.64035c0,0.25253-0.08793,0.46674-0.26381,0.64261L7.53092,9.6628L6.2457,10.94802 c-0.17474,0.17474-0.38895,0.26268-0.64035,0.26268c-0.25141,0-0.46561-0.08794-0.64261-0.26381L3.67978,9.66167L0.26381,6.2457 C0.08794,6.06983,0,5.85563,0,5.60309V5.60535z"></path>
              </svg>
            </span>
            <span>{option}</span>
          </span>
        ))}
      </div>
      <InputComponent placeholder="If none of the options above apply, add one here and press enter." />
    </div>
  );
}

export default function FifthPageContent() {
  return (
    <>
      <div className={styles.contentTitle}>What Are Their Goals or Objectives?</div>
      <InputComponent placeholder={'E.g. Leads, Revenue, etc.'} />
      <div className={styles.contentTitle}>What Are Their Biggest Challenges?</div>
      <SelectFormComponent />
      <div className={styles.contentTitle}>What Are Their Job Responsibilities?</div>
      <InputComponent placeholder={'E.g. people management, content creation, etc.'} />
    </>
  );
}
