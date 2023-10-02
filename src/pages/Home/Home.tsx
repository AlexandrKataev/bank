import styles from './Home.module.scss';
import moneyImage from '../../shared/assets/money.png';

import { CurrentCard } from '@entities';
import { ArrowRightIcon, Block, ButtonUnderlined, ClickIcon } from '@ui';
import { Balance } from '@widgets';

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.sidebar}>
        <CurrentCard />
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

            <ButtonUnderlined title="Get your money now" icon={<ArrowRightIcon />} />
          </div>
        </Block>
      </div>

      <Balance />
    </div>
  );
};
