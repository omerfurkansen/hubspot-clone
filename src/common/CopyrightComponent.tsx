import styles from './CopyrightComponent.module.scss';
import HubspotLogo from '../assets/landing/hubspot-tools.svg';

export default function CopyrightComponent() {
  return (
    <div className={styles.mainDiv}>
      <a className={styles.logoAnchor}>
        <img src={HubspotLogo} className={styles.logoImg} alt="HubspotLogo" />
      </a>
      <span className={styles.copyrightText}>Copyright © {new Date().getFullYear()} HubSpot, Inc</span>
    </div>
  );
}
