import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: number;
  height: number;
  variant: 'primary' | 'secondary' | 'gray' | 'light';
  fontSize?: number;
  onClick?: () => void;
}

export const Button = ({ width, height, variant, children, style, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        ...style,
      }}>
      {children}
    </button>
  );
};
