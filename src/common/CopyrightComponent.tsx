import styles from './CopyrightComponent.module.css';

export default function CopyrightComponent() {
  return (
    <div className={styles.mainDiv}>
      <span className={styles.copyrightText}>Copyright © {new Date().getFullYear()} HubSpot, Inc</span>
    </div>
  );
}
