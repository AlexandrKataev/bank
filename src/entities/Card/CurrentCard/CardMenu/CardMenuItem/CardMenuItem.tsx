import { ArrowIcon } from '@ui';
import styles from './CardMenuItem.module.scss';
import { ReactElement } from 'react';

interface ICardMenuItemProps {
  icon: ReactElement;
  title: string;
}

export const CardMenuItem = ({ icon, title }: ICardMenuItemProps) => {
  return (
    <div className={styles.menu}>
      <div className={styles.icon}>{icon}</div>
      <div>{title}</div>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};
