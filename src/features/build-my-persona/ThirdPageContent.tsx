import { useState } from 'react';
import styles from '../../pages/build-my-persona/BuildMyPersona.module.scss';
import RangeComponent from '../../common/RangeComponent';
import { Finance, Manufacturing, Pharmaceutical, Retail, Sales } from '../../common/Svgs';

const options = [
  { name: 'Sales', image: Sales },
  { name: 'Finance', image: Finance },
  { name: 'Manufacturing', image: Manufacturing },
  { name: 'Investment', image: Sales },
  { name: 'Retail', image: Retail },
  { name: 'Technology', image: Finance },
  { name: 'Advertising', image: Sales },
  { name: 'Bank', image: Finance },
  { name: 'Pharmaceutical', image: Pharmaceutical },
  { name: 'Marketing', image: Sales },
  { name: 'Trade', image: Manufacturing },
  { name: 'Transport', image: Manufacturing },
  { name: 'Real Estate', image: Sales },
  { name: 'Health Care', image: Pharmaceutical },
  { name: 'Insurance', image: Sales },
  { name: 'Agriculture', image: Manufacturing },
  { name: 'Construction', image: Manufacturing },
  { name: 'Food & Beverage', image: Retail },
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
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <>
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
              onClick={() => {
                setSelectedOption(option.name);
                setSelectedImage(option.image);
                setIsOpen(false);
              }}
              style={{ backgroundColor: option.name === selectedOption ? 'rgb(229, 245, 248)' : '' }}
            >
              {option.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.contentTitle}>What's the Size of Their Organization?</div>
      <div className={styles.contentAgePickerBox}>
        <RangeComponent values={rangeValues} texts={organizationSizes} setValues={setRangeValues} />
      </div>
      <div
        className={styles.bottomImageForSelection}
        style={{ opacity: !isOpen ? 1 : 0, transform: !isOpen ? '' : 'translateY(2rem)' }}
      >
        <span className={styles.bottomImageSpan}>
          <img src={selectedImage} alt={selectedOption} />
        </span>
      </div>
    </>
  );
}
