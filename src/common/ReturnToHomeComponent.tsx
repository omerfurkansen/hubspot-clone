import { useAppDispatch } from '../app/hooks';
import styles from './ReturnToHomeComponent.module.scss';
import { setCurrentPage } from '../features/landing-select/landingSelectSlice';

export default function ReturnToHomeComponent() {
  const dispatch = useAppDispatch();

  return (
    <span className={styles.returnToHomeBox}>
      <span>
        <svg
          version="1.1"
          id="Layer_1___8PR13mnD"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 15 11.25"
          enableBackground="new 0 0 15 11.25"
          xmlSpace="preserve"
          className={styles.goBackSvg}
        >
          <path
            d="M14.13461,4.73676H2.95442l3.13846-3.2205c0.3375-0.34698,0.3375-0.90949,0-1.25646
	c-0.33808-0.34639-0.88615-0.34639-1.22423,0l-4.61538,4.7369c-0.08308,0.08586-0.14538,0.18533-0.1875,0.29073
	C0.06404,5.29157,0.06288,5.2969,0.06115,5.30104C0.02308,5.4017,0,5.51065,0,5.62493s0.02308,0.22323,0.06115,0.32389
	c0.00173,0.00414,0.00288,0.00947,0.00462,0.01362c0.04212,0.1054,0.10442,0.20487,0.1875,0.29073l4.61538,4.73691
	C5.03769,11.16355,5.25923,11.25,5.48077,11.25s0.44308-0.08645,0.61212-0.25994c0.3375-0.34698,0.3375-0.90949,0-1.25646
	L2.95442,6.5131h11.18019C14.61231,6.5131,15,6.1152,15,5.62493S14.61231,4.73676,14.13461,4.73676"
          ></path>
        </svg>
      </span>
      <span onClick={() => dispatch(setCurrentPage('landing'))}>Return to homepage</span>
    </span>
  );
}
