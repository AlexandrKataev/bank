import { Block, Button, CopyIcon } from '@ui';
import styles from './Invite.module.scss';

import background from '@assets/people.png';

export const Invite = () => {
  return (
    <Block
      style={{
        maxWidth: '60%',
        flexGrow: 1,

        backgroundImage: `url(${background})`,
        backgroundColor: 'var(--color-background-black)',
      }}>
      <div className={styles.container}>
        <div className={styles.text}>
          Invite a friend with code below and redeem special bonus USD 15 from us!
        </div>
        <Button width={340} height={50} variant="gray">
          <div className={styles.code}>ALEXANDERWRQRQ-SEP23</div>

          <div className={styles.icon}>
            <CopyIcon width="18px" color="var(--color-text-white)" />
          </div>
        </Button>
      </div>
    </Block>
  );
};
