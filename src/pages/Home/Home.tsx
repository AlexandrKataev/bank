// import styles from './Home.module.scss';

import { CurrentCard } from '@entities';
import { Balance } from '@widgets';

export const Home = () => {
  return (
    <div className="homepage">
      <CurrentCard />
      <Balance />
    </div>
  );
};
