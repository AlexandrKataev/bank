import styles from './CurrentCard.module.scss';
import { CardMenu } from './CardMenu';
import { CardImage } from './CardImage';
import { BlockShowMore, BlockTitle } from '@ui';

export const CurrentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <BlockTitle>Cards</BlockTitle>
        <BlockShowMore>Show All</BlockShowMore>
      </div>
      <CardImage />
      <CardMenu />
    </div>
  );
};
