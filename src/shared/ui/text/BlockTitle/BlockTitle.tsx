import styles from './BlockTitle.module.scss';

interface BlockTitleProps {
  children: string | number;
}

export const BlockTitle = ({ children }: BlockTitleProps) => {
  return <div className={styles.title}>{children}</div>;
};
