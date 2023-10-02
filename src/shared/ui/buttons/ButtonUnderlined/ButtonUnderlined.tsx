import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './ButtonUnderlined.module.scss';

interface ButtonUnderlinedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;

  fontSize?: number;
  icon?: ReactElement;
}

export const ButtonUnderlined = ({
  title,

  icon,
  fontSize,
}: ButtonUnderlinedProps) => {
  return (
    <button
      className={styles.button}
      style={{
        fontSize: fontSize ? `${fontSize}px` : '18px',
        height: `${(fontSize || 18) * 2}px`,
      }}>
      <div>{title}</div>
      {icon}
    </button>
  );
};
