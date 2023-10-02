import { Block, BlockShowMore, BlockTitle, PlusIcon } from '@ui';
import styles from './RecentContacts.module.scss';

const contacts = [
  'Alexander',
  'Polina',
  'NAstya',
  'Ilya',
  'Damir',
  'Artem',
  'Artem S',
  'Stas',
  'Mom',
  'Konstantin',
];

export const RecentContacts = () => {
  return (
    <Block style={{ gap: '25px' }}>
      <div className={styles.head}>
        <BlockTitle>Recent Contacts</BlockTitle>
        <BlockShowMore>All Contacts</BlockShowMore>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <div className={styles.add}>
            <PlusIcon color="var(--color-main)" />
          </div>
          <div style={{ color: 'var(--color-main)' }}>Add</div>
        </div>
        {contacts.map((el) => {
          return (
            <div className={styles.contact}>
              <div className={styles.avatar}></div>
              <div style={{ color: 'var(--color-text-gray)' }}>{el}</div>
            </div>
          );
        })}
      </div>
    </Block>
  );
};
