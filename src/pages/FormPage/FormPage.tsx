import React, { Component } from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';
import { IUser } from '../../interfaces/interfaces';

import styles from './FormPage.module.css';

interface FormPageState {
  users: IUser[];
}

export class FormPage extends Component {
  state: FormPageState = {
    users: [],
  };

  addNewUser = (newUser: IUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  render = () => (
    <div className={styles.wrapper}>
      <Form addNewUser={this.addNewUser} />
      <Users users={this.state.users} />
    </div>
  );
}
