import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { User } from './User/User';
import { rootState } from '../../redux/store';

import styles from './Users.module.css';

export const Users = () => {
  const users = useSelector((state: rootState) => state.users.users);
  const usersLayout = useMemo(
    () => users?.map((user, index) => <User user={user} key={index} />),
    [users]
  );

  return <div className={styles.wrapper}>{usersLayout}</div>;
};
