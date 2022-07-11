import styles from '../../pages/BuildMyPersona.module.scss';
import SelectFormComponent from '../../common/SelectFormComponent';
import { Phone, Mail, TextMessaging, Facebook, Smiley } from '../../common/Svgs';

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
  return (
    <>
      <div className={styles.contentTitle}>What Tools Do They Use or Need to Do Their Job?</div>
      <SelectFormComponent options={options} />
      <div className={styles.contentTitle}>How Do They Prefer to Communicate with Vendors/Other Businesses?</div>
      <div className={styles.communicationMethodsBox}>
        {communicationMethods.map((method, index) => {
          return (
            <div key={index} className={styles.communicationMethodsItem}>
              <div className={styles.communicationMethodsItemImage}>{method.image}</div>
              <div className={styles.communicationMethodsItemTitle}>{method.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
