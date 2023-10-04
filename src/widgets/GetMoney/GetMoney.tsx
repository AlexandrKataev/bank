import { ArrowRightIcon, Block, ButtonUnderlined, ClickIcon } from '@ui';
import styles from './GetMoney.module.scss';

import moneyImage from '@assets/money.png';

export const GetMoney = () => {
  return (
    <Block style={{ backgroundImage: `url(${moneyImage})` }}>
      <div className={styles.money}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <ClickIcon />
          </div>
          <div className={styles.text}>
            You have USD 1.000 pending money, it will be ready in 2 business days.
          </div>
        </div>

        <ButtonUnderlined>
          Get your money now
          <ArrowRightIcon />
        </ButtonUnderlined>
      </div>
    </Block>
  );
};
