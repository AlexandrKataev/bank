import { Block, BlockTitle, Button } from '@ui';
import styles from './History.module.scss';

const transactions = [
  { name: 'Alina Soolina', message: 'Sent Meal Bills', date: '1696287079', total: 275, image: '' },
  { name: 'Steam', message: 'Sent Meal Bills', date: '1696287029', total: 275, image: '' },
  { name: 'Steam', message: 'Sent Meal Bills', date: '1696287579', total: 275, image: '' },
];

export const History = () => {
  return (
    <Block style={{ gap: '25px' }}>
      <div className={styles.head}>
        <BlockTitle>Transactions History</BlockTitle>
        <Button
          height={40}
          width={180}
          variant="light"
          style={{ margin: '-10px 0', fontSize: '15px' }}>
          Select Date Range
        </Button>
      </div>
      <div className={styles.content}>
        {transactions.map((el) => {
          return (
            <div className={styles.item} key={el.date}>
              <div className={styles.image}>{Array.from(el.name.matchAll(/\b\w/g)).join('')}</div>
              <div className={styles.first}>
                <div>{el.name}</div>
                <div className={styles.message}>{el.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Block>
  );
};
