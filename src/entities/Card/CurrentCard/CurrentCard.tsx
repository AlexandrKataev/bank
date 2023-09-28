import { MasterCardIcon, Button } from '@ui';
import styles from './CurrentCard.module.scss';
import { CardMenu } from './CardMenu';

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
      <CardMenu />
    </div>
  );
};
