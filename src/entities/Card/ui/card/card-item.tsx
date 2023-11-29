import { User } from '@entities/user';
import { Card, useDeleteCardMutation } from '../../api';
import styles from './card.module.scss';
import { formatCardNumber } from '@entities/Card';
import { Button } from '@ui';

type CardItemProps = {
  cardData: Card;
  userData: User | null;
};

export const CardItem = (props: CardItemProps) => {
  const [deleteCard] = useDeleteCardMutation();
  const removeCard = () => {
    if (props.userData) {
      deleteCard(props.cardData.id);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name}>
          {props.userData?.firstName + ' ' + props.userData?.lastName}
        </div>
        <div className={styles.number}>{formatCardNumber(props.cardData.cardNumber)}</div>
        <div>{props.cardData.paymentSystem}</div>
      </div>
      <div className={styles.details}>
        <div>Balance: {props.cardData.balance} usd</div>
        <div>PIN: {props.cardData.pin}</div>
        <div>CVV: {props.cardData.cvv}</div>
        <div className={styles.buttons}>
          <Button width={180} height={60} variant="primary">
            Set as main
          </Button>
          <Button width={180} height={60} variant="secondary" onClick={removeCard}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
