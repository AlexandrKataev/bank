import { MinusIcon } from '@ui';
import styles from './RemoveCardButton.module.scss';

export const RemoveCardButton = () => {
  return (
    <button className={styles.button}>
      Remove <MinusIcon />
    </button>
  );
};
