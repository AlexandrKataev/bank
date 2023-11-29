import styles from './BlockShowMore.module.scss';

interface BlockShowMoreProps {
  children: string | number;
  onClick?: () => void;
}

export const BlockShowMore = ({ children, onClick }: BlockShowMoreProps) => {
  return (
    <div className={styles.text} onClick={onClick}>
      {children}
    </div>
  );
};
