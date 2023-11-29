import { Button, CardIcon, EditIcon, MinusIcon, PinIcon, PlusIcon, SecurityIcon } from '@ui';
import styles from './CardMenu.module.scss';
import { CardMenuItem } from './CardMenuItem';

import { useState } from 'react';
import { CreateCardModal } from '@features/create-card';

export const CardMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles.menuwrapper}>
        <CardMenuItem title="Show Card Details" icon={<CardIcon />} />
        <CardMenuItem title="Your PIN" icon={<PinIcon />} />
        <CardMenuItem title="Security Code" icon={<SecurityIcon />} />
        <CardMenuItem title="Edit Limits" icon={<EditIcon />} />
      </div>
      <div className={styles.buttons}>
        <Button width={180} height={62} variant="primary" onClick={() => setOpen(true)}>
          Add Card
          <PlusIcon color="var(--color-text-white)" />
        </Button>

        <Button width={180} height={62} variant="secondary">
          Remove
          <MinusIcon />
        </Button>
        <CreateCardModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
