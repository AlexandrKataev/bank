import { BurgerIcon, Logo } from '@ui';
import styles from './Header.module.scss';

import userPhoto from '@assets/user-photo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useOutsideClick } from '@hooks';

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
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const onCLickPopup: React.MouseEventHandler<SVGSVGElement> = () => {
    setPopup(true);
  };
  const ref = useOutsideClick(() => {
    setPopup(false);
  });
  const onClickPopupItem = (link: string) => {
    setPopup(false);
    navigate(link);
  };
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Logo className={styles.logo} />

        <BurgerIcon className={styles.burger} onClick={onCLickPopup} isOpened={popup} />
        {popup && (
          <div className={styles.popup} ref={ref}>
            {nav.map((el) => {
              return (
                <div className={styles.popupitem} onClick={() => onClickPopupItem(el.link)}>
                  {el.title}
                </div>
              );
            })}
          </div>
        )}

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
