import {
  CardIcon,
  EditIcon,
  PinIcon,
  SecurityIcon,
  MasterCardIcon,
  CCVButton,
  ArrowIcon,
  Button,
  PlusIcon,
  MinusIcon,
} from '@ui';
import styles from './CurrentCard.module.scss';

export const CurrentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>Cards</div>
        <div className={styles.showmore}>Show All</div>
      </div>
      <div className={styles.card}>
        <div className={styles.name}>
          <div>Alexander Kataev</div>
          <MasterCardIcon className={styles.master} />
        </div>
        <div className={styles.cardinfo}>
          <div className={styles.number}>0123 4567 8910</div>
          <Button title="CCV" variant="gray" height={32} width={65} fontSize={14} />
        </div>
      </div>
      <div className={styles.menuwrapper}>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <CardIcon />
          </div>
          <div>Show Card Details</div>
          <ArrowIcon className={styles.arrow} />
        </div>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <PinIcon />
          </div>
          <div>Your PIN</div>
          <ArrowIcon className={styles.arrow} />
        </div>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <SecurityIcon />
          </div>
          <div>Security Code</div>
          <ArrowIcon className={styles.arrow} />
        </div>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <EditIcon />
          </div>
          <div>Edit Limits</div>
          <ArrowIcon className={styles.arrow} />
        </div>
      </div>

      <div className={styles.buttons}>
        <Button title="Add Card" width={180} height={62} variant="primary" icon={<PlusIcon />} />
        <Button title="Remove" width={180} height={62} variant="secondary" icon={<MinusIcon />} />
      </div>
    </div>
  );
};
