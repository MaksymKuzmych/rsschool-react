import React, { Component, RefObject } from 'react';

import { getInput } from '../../../utils/getInput';

import styles from './CustomInput.module.css';

export interface CustomInputProps {
  type: string;
  title: string;
  name?: string;
  forwardedRef: RefObject<HTMLInputElement>;
}

export class CustomInput extends Component<CustomInputProps> {
  render = () => {
    const { title } = this.props;
    const input = getInput(this.props);

    return (
      <label className={styles.label}>
        {title}: {input}
      </label>
    );
  };
}
