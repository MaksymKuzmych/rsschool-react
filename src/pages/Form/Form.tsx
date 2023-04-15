import React from 'react';

import { UserForm } from '../../components/UserForm/UserForm';
import { Users } from '../../components/Users/Users';

import styles from './Form.module.css';

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <UserForm />
      <Users />
    </div>
  );
};
