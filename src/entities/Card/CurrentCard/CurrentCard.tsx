import styles from './CurrentCard.module.scss';
import { CardMenu } from './CardMenu';
import { CardImage } from './CardImage';
import { BlockShowMore } from '@ui';

export const CurrentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>Cards</div>
        <BlockShowMore>Show All</BlockShowMore>
      </div>
      <CardImage />
      <CardMenu />
    </div>
  );
};
