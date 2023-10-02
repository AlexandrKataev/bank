import { Block, Button } from '@ui';
import styles from './Invite.module.scss';

import background from '../../shared/assets/people.png';

export const Invite = () => {
  return (
    <Block
      style={{
        width: '350px',

        height: '200px',
        backgroundImage: `url(${background})`,
        backgroundColor: 'var(--color-background-black)',
      }}>
      <div className={styles.container}>
        <div className={styles.text}>
          Invite a friend with code below and redeem special bonus USD 15 from us!
        </div>
        <Button title={'ALEXANDERWRQRQ-SEP23'} width={340} height={50} variant="gray" />
      </div>
    </Block>
  );
};
