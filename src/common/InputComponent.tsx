import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import styles from '../pages/build-my-persona/BuildMyPersona.module.scss';

export default function InputComponent({
  ...props
}: {
  value?: string;
  onChange?: ActionCreatorWithPayload<any, string>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  const [inputValue, setInputValueTo] = useState('');
  const [showPencil, setShowPencilTo] = useState(false);

  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange ? dispatch(props.onChange!(e.target.value)) : setInputValueTo(e.target.value);
  };

  return (
    <span className={styles.contentInputBox}>
      <span className={styles.contentInputSpan}></span>
      <input
        type="text"
        placeholder={`${props.placeholder}`}
        className={styles.contentInput}
        value={props.value || inputValue}
        onChange={onChangeInputValue}
        onFocus={() => setShowPencilTo(true)}
        onBlur={() => setShowPencilTo(false)}
        onKeyDown={props.onKeyDown}
      />
      <div
        className={styles.contentInputPen}
        style={{ opacity: showPencil ? 1 : 0, transform: showPencil ? 'translateY(50%)' : 'translateY(100%)' }}
      >
        <PencilSpan />
      </div>
    </span>
  );
}

function PencilSpan() {
  return (
    <span>
      <svg
        version="1.1"
        id="Layer_1___bjfNa359"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 14.13147 14.13062"
        enableBackground="new 0 0 14.13147 14.13062"
        xmlSpace="preserve"
        className={styles.penSvg}
      >
        <g>
          <path
            d="M10.5882,5.70361l-6.15601,6.15601l-0.65503-0.65503c0.03204-0.021,0.06799-0.03497,0.09601-0.06299
		L9.9502,5.06458c0.24298-0.24396,0.24298-0.63898,0-0.883c-0.24402-0.245-0.64001-0.245-0.88501,0l-6.07703,6.07605
		c-0.02802,0.02795-0.04102,0.06396-0.06299,0.09497L2.27118,9.69861L8.42719,3.5426c0.24298-0.24402,0.24298-0.64001,0-0.88397
		c-0.24402-0.24402-0.64099-0.24402-0.88501,0L0.94416,9.25659c-0.00397,0.005-0.00598,0.01099-0.00995,0.01599
		c-0.01202,0.013-0.01801,0.02899-0.02802,0.04303c-0.052,0.065-0.09003,0.13898-0.11304,0.22101
		C0.78919,9.55157,0.77716,9.56158,0.7732,9.5766l-0.76105,3.80603c-0.04095,0.20496,0.02301,0.41699,0.17102,0.565
		c0.11902,0.11798,0.27802,0.18298,0.44202,0.18298c0.04102,0,0.08197-0.00403,0.12299-0.01202l3.80701-0.76196
		c0.01398-0.00201,0.02399-0.01501,0.03802-0.01904c0.08099-0.02197,0.15497-0.06,0.21997-0.11096
		c0.01398-0.01105,0.03198-0.01703,0.04602-0.03003c0.00397-0.005,0.01099-0.00598,0.01495-0.01001l6.599-6.599
		c0.24304-0.24396,0.24304-0.63995,0-0.88397C11.22919,5.45959,10.83216,5.45959,10.5882,5.70361z"
          ></path>
          <path
            d="M13.65546,2.10651l-1.63098-1.63098c-0.63501-0.63403-1.664-0.63403-2.29901,0L9.0315,1.16949
		c-0.24304,0.245-0.24304,0.64001,0,0.88403l3.04498,3.04498c0.12201,0.12201,0.28198,0.18298,0.44202,0.18298
		c0.15997,0,0.32098-0.06097,0.44299-0.18298l0.69299-0.69403c0.30798-0.30701,0.47699-0.71497,0.47699-1.14899
		S13.96247,2.41351,13.65546,2.10651z"
          ></path>
        </g>
      </svg>
    </span>
  );
}
