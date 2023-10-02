import styles from './ButtonUnderlined.module.scss';

interface ButtonUnderlinedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: number;
}

export const ButtonUnderlined = ({ children, fontSize }: ButtonUnderlinedProps) => {
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
