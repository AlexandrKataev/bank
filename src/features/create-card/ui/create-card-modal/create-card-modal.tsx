import styles from './create-card-modal.module.scss';

import { CreateCardDto, useAddCardMutation } from '@entities/Card';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@app/store/store';
import { selectUser } from '@entities/user';

import { Button } from '@ui';
import { useEffect } from 'react';
import { Option, Modal, Sheet, ModalClose } from '@mui/joy';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateCardModal = ({ open, setOpen }: ModalProps) => {
  const {
    handleSubmit,

    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<CreateCardDto>({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const [addCard] = useAddCardMutation();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setOpen(false);
    }
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<CreateCardDto> = (values) => {
    if (user) {
      addCard({ ...values, userId: user.id });
    }
  };
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Sheet
        variant="soft"
        sx={{
          maxWidth: 800,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
          padding: 7,
        }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
          Choose payment system
          <Controller
            name="paymentSystem"
            control={control}
            defaultValue="visa"
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value="visa">Visa</MenuItem>
                <MenuItem value="mastercard">MasterCard</MenuItem>
                <MenuItem value="mir">MIR</MenuItem>
              </Select>
            )}
          />
          {/* <Select defaultValue="visa">
            <Option value="visa">Visa</Option>
            <Option value="mastercard">MasterCard</Option>
            <Option value="mir">MIR</Option>
          </Select> */}
          {/* <input
            type="text"
            {...register('paymentSystem', {
              required: 'Required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Only letters',
              },
            })}
          /> */}
          <Button type="submit" width={150} height={50} variant="primary">
            Add Card
          </Button>
        </form>
      </Sheet>
    </Modal>
  );
};
