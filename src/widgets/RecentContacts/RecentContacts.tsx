import { Block, BlockShowMore, BlockTitle, PlusIcon } from '@ui';
import styles from './RecentContacts.module.scss';

import { useEffect, useState } from 'react';
import { Contact } from '@models';
import { contactsService } from '@services';

export const RecentContacts = () => {
  const [contacts, setContacts] = useState([] as Contact[]);
  useEffect(() => {
    contactsService.getContacts().then((value) => {
      setContacts(value);
    });
  }, []);
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
            <div className={styles.contact} key={el.id}>
              <img className={styles.avatar} src={el.avatar} />
              <div style={{ color: 'var(--color-text-gray)' }}>{el.firstName}</div>
            </div>
          );
        })}
      </div>
    </Block>
  );
};
