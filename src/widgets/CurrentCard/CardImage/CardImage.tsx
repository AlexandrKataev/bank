import { Button, MasterCardIcon } from '@ui';
import styles from './CardImage.module.scss';

export const CardImage = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.name}>
          <div>Alexander Kataev</div>
          <MasterCardIcon className={styles.master} />
        </div>
        <div className={styles.cardinfo}>
          <div className={styles.number}>0123 4567 8910</div>
          <Button variant="gray" height={32} width={65} fontSize={14}>
            CCV
          </Button>
        </div>
      </div>
    </>
  );
};
