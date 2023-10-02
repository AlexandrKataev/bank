import styles from './Balance.module.scss';

import { ArrowDownIcon, ArrowUpIcon, Block, BlockTitle, Button, PlusIcon } from '@ui';

export const Balance = () => {
  return (
    <Block style={{ maxWidth: '100%', height: '200px', flexGrow: 1, gap: '20px' }}>
      <BlockTitle>Total Balance</BlockTitle>
      <div className={styles.total}>
        <span className={styles.sum}>29,475.00</span>
        <span className={styles.valute}>USD</span>
      </div>
      <div className={styles.buttons}>
        <Button height={50} width={150} variant="primary">
          Send
          <ArrowUpIcon color="var(--color-text-white)" />
        </Button>
        <Button height={50} width={150} variant="light">
          Request
          <ArrowDownIcon />
        </Button>
        <Button height={50} width={150} variant="light">
          Top Up
          <PlusIcon />
        </Button>
      </div>
    </Block>
  );
};
