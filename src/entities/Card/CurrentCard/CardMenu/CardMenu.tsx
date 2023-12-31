import { Button, CardIcon, EditIcon, MinusIcon, PinIcon, PlusIcon, SecurityIcon } from '@ui';
import styles from './CardMenu.module.scss';
import { CardMenuItem } from './CardMenuItem';

export const CardMenu = () => {
  return (
    <>
      <div className={styles.menuwrapper}>
        <CardMenuItem title="Show Card Details" icon={<CardIcon />} />
        <CardMenuItem title="Your PIN" icon={<PinIcon />} />
        <CardMenuItem title="Security Code" icon={<SecurityIcon />} />
        <CardMenuItem title="Edit Limits" icon={<EditIcon />} />
      </div>
      <div className={styles.buttons}>
        <Button width={180} height={62} variant="primary">
          Add Card
          <PlusIcon color="var(--color-text-white)" />
        </Button>
        <Button width={180} height={62} variant="secondary">
          Remove
          <MinusIcon />
        </Button>
      </div>
    </>
  );
};
