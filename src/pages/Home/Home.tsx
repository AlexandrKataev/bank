import styles from './Home.module.scss';

import { Balance, Invite, CurrentCard, GetMoney, RecentContacts, History } from '@widgets';

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.sidebar}>
        <CurrentCard />
        <GetMoney />
      </div>
      <div className={styles.content}>
        <div className={styles.row1}>
          <Balance />
          <Invite />
        </div>
        <RecentContacts />
        <History />
      </div>
    </div>
  );
};
