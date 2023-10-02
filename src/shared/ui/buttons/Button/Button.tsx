import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width: number;
  height: number;
  variant: 'primary' | 'secondary' | 'gray' | 'light';
  fontSize?: number;
  icon?: ReactElement;
}

const colorTheme = {
  primary: styles.primary,
  secondary: styles.secondary,
  gray: styles.gray,
  light: styles.light,
};

export const Button = ({ title, width, height, variant, icon, fontSize }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, colorTheme[variant])}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        fontSize: fontSize ? `${fontSize}px` : '18px',
      }}>
      <div>{title}</div>
      {icon}
    </button>
  );
};
