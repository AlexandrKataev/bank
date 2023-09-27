import { PlusIcon } from '@ui';
import styles from './AddCardButton.module.scss';

export const AddCardButton = () => {
  return (
    <button className={styles.button}>
      Add Card <PlusIcon />
    </button>
  );
};
