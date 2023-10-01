import styles from './Block.module.scss';

interface BlockProps {
  children: any;
}

export const Block = ({ children }: BlockProps) => {
  return <article className={styles.block}>{children}</article>;
};
