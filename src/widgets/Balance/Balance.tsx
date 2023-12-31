import { formatNumToCash } from '@helpers';
import styles from './Balance.module.scss';

import { ArrowDownIcon, ArrowUpIcon, Block, BlockTitle, Button, PlusIcon } from '@ui';

const total = 24579;

export const Balance = () => {
  return (
    <Block
      style={{
        flexGrow: 50,
        flexShrink: 1,
        gap: '20px',
      }}>
      <BlockTitle>Total Balance</BlockTitle>
      <div className={styles.total}>
        <span className={styles.sum}>{formatNumToCash(total)}</span>
        <span className={styles.currency}>USD</span>
      </div>
      <div className={styles.buttons}>
        <Button height={50} width={166} variant="primary" style={{ width: '33%', maxWidth: 179 }}>
          Send
          <ArrowUpIcon color="var(--color-text-white)" />
        </Button>
        <Button height={50} width={166} variant="light" style={{ width: '33%', maxWidth: 179 }}>
          Request
          <ArrowDownIcon />
        </Button>
        <Button height={50} width={166} variant="light" style={{ width: '33%', maxWidth: 179 }}>
          Top Up
          <PlusIcon />
        </Button>
      </div>
    </Block>
  );
};
