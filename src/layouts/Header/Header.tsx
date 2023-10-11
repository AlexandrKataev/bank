import { BurgerIcon, Logo } from '@ui';
import styles from './Header.module.scss';

import userPhoto from '@assets/user-photo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClick, useResizeScreen } from '@hooks';

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
  const windowSize = useResizeScreen();

  const ref = useOutsideClick(() => {
    setPopup(false);
  });

  useEffect(() => {
    if (windowSize > 1200) {
      setPopup(false);
    }
  }, [windowSize]);

  const onCLickPopup: React.MouseEventHandler<SVGSVGElement> = () => {
    setPopup(!popup);
  };

  const onClickPopupItem = () => {
    setPopup(false);
  };
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Logo className={styles.logo} />

        {popup ? (
          <Logo />
        ) : (
          <BurgerIcon className={styles.burger} onClick={onCLickPopup} isOpened={popup} />
        )}

        {popup && (
          <div className={styles.popup} ref={ref}>
            {nav.map((el) => {
              return (
                <NavLink
                  className={styles.popupitem}
                  onClick={() => onClickPopupItem()}
                  style={({ isActive }) => {
                    return { fontWeight: isActive ? 600 : 400 };
                  }}
                  to={el.link}
                  key={el.link}>
                  {el.title}
                </NavLink>
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
              className={styles.menuitem}
              key={el.link}>
              {`${el.title}`}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};
