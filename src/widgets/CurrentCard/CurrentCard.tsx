import styles from './CurrentCard.module.scss';
import { CardMenu } from './CardMenu';
import { CardImage } from './CardImage';
import { BlockShowMore, BlockTitle } from '@ui';
import { useNavigate } from 'react-router-dom';

export const CurrentCard = () => {
  const navigate = useNavigate();

  const onClickShowAll = () => {
    navigate('/cards');
  };
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <BlockTitle>Cards</BlockTitle>
        <BlockShowMore onClick={onClickShowAll}>Show All</BlockShowMore>
      </div>
      <CardImage />
      <CardMenu />
    </div>
  );
};
