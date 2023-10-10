import { PropsWithChildren } from 'react';
import styles from './ButtonUnderlined.module.scss';

interface ButtonUnderlinedProps {
  fontSize?: number;
}

export const ButtonUnderlined = ({
  children,
  fontSize,
}: PropsWithChildren<ButtonUnderlinedProps>) => {
  return (
    <button
      className={styles.button}
      style={{
        fontSize: fontSize ? `${fontSize}px` : '18px',
        height: `${(fontSize || 18) * 2}px`,
      }}>
      {children}
    </button>
  );
};
