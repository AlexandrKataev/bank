import styles from './BlockShowMore.module.scss';

interface BlockShowMoreProps {
  children: string | number;
}

export const BlockShowMore = ({ children }: BlockShowMoreProps) => {
  return <div className={styles.text}>{children}</div>;
};
