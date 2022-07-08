import { CSSProperties, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from '../../pages/BuildMyPersona.module.scss';

export default function SecondPageContent() {
  const [firstRangeValues, setFirstRangeValues] = useState([0]);
  const [secondRangeValues, setSecondRangeValues] = useState([0]);

  return (
    <>
      <div className={styles.contentTitle}>How Old Are They?</div>
      <div className={styles.contentAgePickerBox}>
        <RenderRange values={firstRangeValues} texts={texts} setValues={setFirstRangeValues} />
      </div>
      <div className={styles.contentTitle}>
        What is the highest degree or level of school your persona has completed?
      </div>
      <div className={styles.contentAgePickerBox}>
        <RenderRange values={secondRangeValues} texts={textsSecond} setValues={setSecondRangeValues} />
      </div>
    </>
  );
}

const texts = [
  'Under 18 years',
  '18 to 24 years',
  '25 to 34 years',
  '35 to 44 years',
  '45 to 54 years',
  '55 to 64 years',
  'Age 65 or older',
];

const textsSecond = [
  'Less than a high school diploma',
  'High school degree or equivalent (e.g. GED)',
  'Some college, no degree',
  'Associate degree (e.g. AA, AS)',
  'Bachelor’s degree (e.g. BA, BS)',
  'Master’s degree (e.g. MA, MS, MEd)',
  'Professional degree (e.g. MD, DDS, DVM)',
  'Doctorate degree (e.g. PhD, EdD)',
];

function stylingForTrack(values: number[]): CSSProperties {
  return {
    height: '0.2rem',
    background: getTrackBackground({
      values: values,
      colors: ['rgb(255, 255, 255)', 'rgba(203, 214, 226, .2)'],
      min: 0,
      max: 100,
    }),
    cursor: 'pointer',
  };
}

const stylingForLabel: CSSProperties = {
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '50%',
  backgroundColor: 'rgb(255, 255, 255)',
  cursor: 'pointer',
};

const stylingForThumb: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '10em',
  color: '#fff',
  fontWeight: 500,
  fontSize: 15,
  textAlign: 'center',
  transform: 'translate(-50%, -125%)',
  willChange: 'transform',
};

function showText(number: number, texts: string[]): string {
  const limit = 100 / texts.length;
  let latestString = '';
  texts.forEach((text, index) => {
    if (number >= index * limit && number < (index + 1) * limit) {
      latestString = text;
    }
  });
  return latestString;
}

function RenderRange(rangeProps: { values: number[]; texts: string[]; setValues: (values: number[]) => void }) {
  return (
    <Range
      min={0}
      max={100}
      step={0.01}
      values={rangeProps.values}
      onChange={(values) => {
        rangeProps.setValues(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          ref={props.ref}
          style={stylingForTrack(rangeProps.values)}
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div {...props} style={stylingForLabel}>
          <div style={stylingForThumb}>{showText(rangeProps.values[0], rangeProps.texts)}</div>
        </div>
      )}
    />
  );
}
