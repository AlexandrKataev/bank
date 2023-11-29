import { BurgerIcon, Logo } from '@ui';
import styles from './Header.module.scss';

import userPhoto from '@assets/user-photo.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useOutsideClick, useResizeScreen } from '@hooks';

import cn from 'clsx';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store/store';
import { logout } from '@entities/user';
import { useLogoutMutation } from '@features/auth';

interface NavLink {
  title: string;
  link: string;
}

interface UserPopupItem {
  title: string;
  func: () => void;
}

const nav: NavLink[] = [
  { title: 'Summary', link: '/home' },
  { title: 'Cards', link: '/cards' },
  { title: 'Activity', link: '/activity' },
  { title: 'Recipients', link: '/recipients' },
  { title: 'Help Center', link: '/help' },
  { title: 'Earn Gifts', link: '/gifts' },
];

export const Header = () => {
  const [popup, setPopup] = useState(false);
  const [userPopup, setUserPopup] = useState(false);

  const [logout] = useLogoutMutation();

  const onLogoutHandler = async () => {
    logout();
  };

  const userPopupItems: UserPopupItem[] = [
    { title: 'Profile', func: () => {} },
    {
      title: 'Logout',
      func: onLogoutHandler,
    },
  ];

  const windowSize = useResizeScreen();

  const user = useAppSelector((state: RootState) => state.userState.user);

  const ref = useOutsideClick(() => {
    setPopup(false);
  });

  const refAvatar = useOutsideClick(() => {
    setUserPopup(false);
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

  const onCLickUserPopup: React.MouseEventHandler<HTMLImageElement> = () => {
    setUserPopup(!userPopup);
  };

  const onClickUserPopupItem = () => {
    setUserPopup(false);
  };
  return (
    <header className={cn(styles.container, !user && styles.blur)}>
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
            Welcome back, <b>{`${user?.firstName}!`}</b>
          </span>
          <div className={styles.avatar}>
            <img src={userPhoto} onClick={onCLickUserPopup} />
            {userPopup && (
              <div className={styles.userPopup} ref={refAvatar}>
                {userPopupItems.map((el) => {
                  return (
                    <div
                      className={styles.userPopupItem}
                      key={el.title}
                      onClick={() => {
                        onClickUserPopupItem();
                        el.func();
                      }}>
                      {el.title}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
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
