import { CSSProperties } from 'react';
import { Range, getTrackBackground } from 'react-range';

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

export default function RangeComponent(rangeProps: {
  values: number[];
  texts: string[];
  setValues: (values: number[]) => void;
}) {
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
