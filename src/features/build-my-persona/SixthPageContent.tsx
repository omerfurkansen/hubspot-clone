import styles from '../../pages/BuildMyPersona.module.scss';
import SelectFormComponent from '../../common/SelectFormComponent';
import { Phone, Mail, TextMessaging, Facebook, Smiley } from '../../common/Svgs';
import { useAppSelector } from '../../app/hooks';
import { setAdditionalTools } from './buildMyPersonaSlice';

const options = [
  'Accounting and Bookkeeping Systems',
  'CRM Software',
  'Content Management Systems',
  'Project Management',
  'Cloud-Based Storage & File Sharing Applications',
  'Email',
  'Employee Scheduling Software',
  'Invoicing Software',
  'Word Processing Programs',
  'Reporting Software',
  'Business Intelligence Dashboards',
];

const communicationMethods = [
  { content: 'Phone', image: <Phone /> },
  { content: 'Email', image: <Mail /> },
  { content: 'Text Messaging', image: <TextMessaging /> },
  { content: 'Social Media', image: <Facebook /> },
  { content: 'Face-to-Face', image: <Smiley /> },
];

export default function SixthPageContent() {
  const additionalTools = useAppSelector((state) => state.buildMyPersona.additionalTools);

  return (
    <>
      <div className={styles.contentTitle}>What Tools Do They Use or Need to Do Their Job?</div>
      <SelectFormComponent value={additionalTools} onChange={setAdditionalTools} options={options} />
      <div className={styles.contentTitle}>How Do They Prefer to Communicate with Vendors/Other Businesses?</div>
      <div className={styles.circularButtonsBox}>
        {communicationMethods.map((method, index) => {
          return (
            <div key={index} className={styles.circularButtonsItem}>
              <div className={styles.circularButtonsItemImage}>{method.image}</div>
              <div className={styles.circularButtonsItemTitle}>{method.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
