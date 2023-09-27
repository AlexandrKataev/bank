import styles from './CurrentCard.module.scss';

export const CurrentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Cards</div>
        <div className={styles.showmore}>Show All</div>
      </div>
      <div className={styles.card}>
        <div>Alexander Kataev</div>
      </div>
    </div>
  );
};
