import styles from './Balance.module.scss';

import { ArrowDownIcon, ArrowUpIcon, Block, BlockTitle, Button, PlusIcon } from '@ui';

export const Balance = () => {
  return (
    <Block
      style={{
        minWidth: '400px',
        flexGrow: 50,
        flexShrink: 1,
        gap: '20px',
      }}>
      <BlockTitle>Total Balance</BlockTitle>
      <div className={styles.total}>
        <span className={styles.sum}>29,475.00</span>
        <span className={styles.valute}>USD</span>
      </div>
      <div className={styles.buttons}>
        <Button height={50} width={166} variant="primary" style={{ width: '33%', minWidth: '20%' }}>
          Send
          <ArrowUpIcon color="var(--color-text-white)" />
        </Button>
        <Button height={50} width={166} variant="light" style={{ width: '33%', minWidth: '20%' }}>
          Request
          <ArrowDownIcon />
        </Button>
        <Button height={50} width={166} variant="light" style={{ width: '33%', minWidth: '20%' }}>
          Top Up
          <PlusIcon />
        </Button>
      </div>
    </Block>
  );
};
