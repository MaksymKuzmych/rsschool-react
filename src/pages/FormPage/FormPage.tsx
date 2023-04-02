import React, { useState } from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';
import { IUser } from '../../interfaces/interfaces';

import styles from './FormPage.module.css';

export const FormPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const addNewUser = (newUser: IUser) => setUsers([...users, structuredClone(newUser)]);

  return (
    <div className={styles.wrapper}>
      <Form addNewUser={addNewUser} />
      <Users users={users} />
    </div>
  );
};
