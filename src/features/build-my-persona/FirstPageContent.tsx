import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { profiles } from '../../data';
import { setSelectedPersona } from './buildMyPersonaSlice';
import styles from '../../pages/build-my-persona/BuildMyPersona.module.scss';
import InputComponent from '../../common/InputComponent';

export default function FirstPageContent() {
  const dispatch = useAppDispatch();
  const selectedPersona = useAppSelector((state) => state.buildMyPersona.selectedPersona);

  return (
    <>
      <div className={styles.contentTitle}>Name Your Persona</div>
      <InputComponent placeholder="Name Your Persona" />
      <div className={styles.contentTitle}>Pick Your Avatar</div>
      <div className={styles.profileImagesBox}>
        {Object.values(profiles).map((profile, index) => (
          <div key={index} className={styles.profileImageDiv} onClick={() => dispatch(setSelectedPersona(profile))}>
            <div
              className={styles.profileImageCoverage}
              style={{
                backgroundColor: profile.color,
                boxShadow: selectedPersona.id === index ? 'rgb(255 255 255) 0px 0px 0px 3px' : '',
              }}
            >
              <img src={profile.photo} className={styles.profileImage} alt="profile" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
