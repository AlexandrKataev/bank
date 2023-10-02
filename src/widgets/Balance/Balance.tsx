import styles from './Balance.module.scss';

import { ArrowUpIcon, Block, Button } from '@ui';

export const Balance = () => {
  return (
    <Block style={{ width: '600px', height: '300px' }}>
      <div className={styles.title}>Total Balance</div>
      <div className={styles.total}>
        <span className={styles.sum}>29,475.00</span>
        <span className={styles.valute}>USD</span>
      </div>
      <div className={styles.buttons}>
        <Button height={50} width={150} title="Send" variant="primary" icon={<ArrowUpIcon />} />
        <Button
          height={50}
          width={150}
          title="Request"
          variant="secondary"
          icon={<ArrowUpIcon />}
        />
        <Button height={50} width={150} title="Top Up" variant="secondary" icon={<ArrowUpIcon />} />
      </div>
    </Block>
  );
};
