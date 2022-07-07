import styles from './CopyrightComponent.module.scss';
import HubspotLogo from '../assets/landing/hubspot-tools.svg';
import { useAppSelector } from '../app/hooks';

export default function CopyrightComponent() {
  const isLandingPage = useAppSelector((state) => state.landingSelect.currentPage === 'landing');

  return (
    <div className={styles.mainDiv}>
      {!isLandingPage && (
        <a className={styles.logoAnchor}>
          <img src={HubspotLogo} className={styles.logoImg} alt="HubspotLogo" />
        </a>
      )}
      <span className={styles.copyrightText}>Copyright © {new Date().getFullYear()} HubSpot, Inc</span>
    </div>
  );
}
