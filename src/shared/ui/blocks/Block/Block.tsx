import styles from './Block.module.scss';

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
}

export const Block = ({ children, style }: BlockProps) => {
  return (
    <article className={styles.block} style={style}>
      {children}
    </article>
  );
};
