import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: number;
  height: number;
  variant: 'primary' | 'secondary' | 'gray' | 'light';
  fontSize?: number;
}

const colorTheme = {
  primary: styles.primary,
  secondary: styles.secondary,
  gray: styles.gray,
  light: styles.light,
};

export const Button = ({ width, height, variant, fontSize, children, style }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, colorTheme[variant])}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        fontSize: fontSize ? `${fontSize}px` : '18px',
        ...style,
      }}>
      {children}
    </button>
  );
};
