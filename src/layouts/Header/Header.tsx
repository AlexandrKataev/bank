import { Logo } from '@ui';
import styles from './Header.module.scss';

import userPhoto from '../../shared/assets/user-photo.png';

const name: string = 'Alexander';

const nav: string[] = ['Summary', 'Cards', 'Activity', 'Recipients', 'Help Center', 'Earn Gifts'];

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile}>
        <span className={styles.greeting}>
          Welcome back, <b>{`${name}!`}</b>
        </span>
        <img src={userPhoto} />
      </div>
      <div className={styles.navbar}>
        {nav.map((el) => {
          return <div className="">{`${el}`}</div>;
        })}
      </div>
    </div>
  );
};
