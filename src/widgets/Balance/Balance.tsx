// import styles from './Balance.module.scss';

import { Block, Button } from '@ui';

export const Balance = () => {
  return (
    <Block>
      <h3>Total Balance</h3>
      <Button height={40} width={80} title="Add" variant="primary" />
    </Block>
  );
};
