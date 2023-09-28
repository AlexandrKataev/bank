import styles from './CurrentCard.module.scss';
import { CardMenu } from './CardMenu';
import { CardImage } from './CardImage';

export const CurrentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>Cards</div>
        <div className={styles.showmore}>Show All</div>
      </div>
      <CardImage />
      <CardMenu />
    </div>
  );
};
