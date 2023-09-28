import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width: number;
  height: number;
  variant: 'primary' | 'secondary' | 'gray';
  fontSize?: number;
  icon?: ReactElement;
}

export const Button = ({ title, width, height, variant, icon, fontSize }: IButtonProps) => {
  return (
    <button
      className={
        variant === 'primary'
          ? styles.primary
          : variant === 'secondary'
          ? styles.secondary
          : styles.gray
      }
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
