import { Block, BlockTitle, Button, PlusIcon } from '@ui';
import styles from './cards-list.module.scss';
import { useAppSelector } from '@app/store/store';
import { CardItem, useGetCardsQuery } from '@entities/Card';
import { selectUser } from '@entities/user';
import { CreateCardModal } from '@features/create-card';
import { useState } from 'react';

export const CardsList = () => {
  const user = useAppSelector(selectUser) || null;
  const { data } = useGetCardsQuery(user?.id || null);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Block style={{ gap: '25px' }}>
      <CreateCardModal open={open} setOpen={setOpen} />
      <BlockTitle>All Cards</BlockTitle>
      <Button width={180} height={62} variant="primary" onClick={() => setOpen(true)}>
        Add Card
        {/* <PlusIcon color="var(--color-text-white)" /> */}
      </Button>
      {data &&
        data.map((el) => {
          return <CardItem cardData={el} userData={user} />;
        })}
    </Block>
  );
};
