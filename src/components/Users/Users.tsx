import React, { Component } from 'react';

import { IUser } from '../../interfaces/interfaces';
import { User } from './User/User';

import styles from './Users.module.css';

interface UsersProps {
  users: IUser[];
}

export class Users extends Component<UsersProps> {
  render = () => {
    const usersLayout = this.props.users.map((user, index) => <User user={user} key={index} />);

    return <div className={styles.wrapper}>{usersLayout}</div>;
  };
}
