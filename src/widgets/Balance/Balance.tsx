import { formatNumToCash } from '@helpers';
import styles from './Balance.module.scss';

import { ArrowDownIcon, ArrowUpIcon, Block, BlockTitle, Button, PlusIcon } from '@ui';
import { useAppSelector } from '@app/store/store';
import { selectCurrentCard, useGetCardsQuery } from '@entities/Card';
import { selectUser } from '@entities/user';

export const Balance = () => {
  const user = useAppSelector(selectUser) || null;
  const { data } = useGetCardsQuery(user?.id || null);
  return (
    <Block
      style={{
        flexGrow: 50,
        flexShrink: 1,
        gap: '20px',
      }}>
      <BlockTitle>Total Balance</BlockTitle>
      <div className={styles.total}>
        <span className={styles.sum}>{formatNumToCash(data ? data[0].balance : 0)}</span>
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
