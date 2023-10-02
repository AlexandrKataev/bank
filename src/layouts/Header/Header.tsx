import { Logo } from '@ui';
import styles from './Header.module.scss';

import userPhoto from '../../shared/assets/user-photo.png';
import { NavLink } from 'react-router-dom';

const name: string = 'Alexander';

interface NavLink {
  title: string;
  link: string;
}

const nav: NavLink[] = [
  { title: 'Summary', link: '/' },
  { title: 'Cards', link: '/cards' },
  { title: 'Activity', link: '/activity' },
  { title: 'Recipients', link: '/recipients' },
  { title: 'Help Center', link: '/help' },
  { title: 'Earn Gifts', link: '/gifts' },
];

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Logo />
        <div className={styles.profile}>
          <span className={styles.greeting}>
            Welcome back, <b>{`${name}!`}</b>
          </span>
          <img src={userPhoto} />
        </div>
      </div>

      <div className={styles.navbar}>
        {nav.map((el) => {
          return (
            <NavLink
              to={el.link}
              style={({ isActive }) => {
                return { fontWeight: isActive ? 600 : 400 };
              }}
              className={styles.menuitem}>{`${el.title}`}</NavLink>
          );
        })}
      </div>
    </header>
  );
};
