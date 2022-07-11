import { useState } from 'react';
import styles from '../../pages/BuildMyPersona.module.scss';
import RangeComponent from '../../common/RangeComponent';

const options = [
  'Sales',
  'Finance',
  'Manufacturing',
  'Investment',
  'Retail',
  'Technology',
  'Advertising',
  'Bank',
  'Pharmaceutical',
  'Marketing',
  'Trade',
  'Transport',
  'Real Estate',
  'Health Care',
  'Insurance',
  'Agriculture',
  'Construction',
  'Food & Beverage',
];

const organizationSizes = [
  'Self-employed',
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1001-5000 employees',
  '5001-10,000 employees',
  '10,001+ employees',
];

export default function ThirdPageContent() {
  const [rangeValues, setRangeValues] = useState([0]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <div>
        <div className={styles.contentTitle}>What Industry Do They Work In?</div>
        <div className={styles.selectBox}>
          <div className={styles.selectBoxFirstItem} onClick={() => setIsOpen(!isOpen)}>
            {selectedOption ? selectedOption : 'Select an option'}
          </div>
          <div className={styles.selectBoxOtherItems} style={{ maxHeight: isOpen ? '10rem' : 0 }}>
            {options.map((option, index) => (
              <span
                key={index}
                className={styles.selectBoxOtherItemsEach}
                onClick={() => setSelectedOption(option)}
                style={{ backgroundColor: option === selectedOption ? 'rgb(229, 245, 248)' : '' }}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.contentTitle}>What's the Size of Their Organization?</div>
        <div className={styles.contentAgePickerBox}>
          <RangeComponent values={rangeValues} texts={organizationSizes} setValues={setRangeValues} />
        </div>
      </div>
      {/* <div className={styles.bottomImageForSelection}>
        <span className={styles.bottomImageSpan}>
        </span>
      </div> */}
    </div>
  );
}
