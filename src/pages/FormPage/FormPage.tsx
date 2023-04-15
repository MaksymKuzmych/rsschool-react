import React from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';

import styles from './FormPage.module.css';

export const FormPage = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
      <Users />
    </div>
  );
};
