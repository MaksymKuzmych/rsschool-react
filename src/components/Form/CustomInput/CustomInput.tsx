import React, { Component, RefObject } from 'react';

import { getInput } from '../../../utils/getInput';

import styles from './CustomInput.module.css';

export interface CustomInputProps {
  type: string;
  title: string;
  name?: string;
  forwardRef: RefObject<HTMLInputElement>;
  error?: string;
}

export class CustomInput extends Component<CustomInputProps> {
  render = () => {
    const { type, title, error } = this.props;
    const input = getInput(this.props);
    const isTextOrFile = type === 'text' || type === 'file';
    const isAgreement = title === 'Consent to the processing of personal data';

    return (
      <div>
        <label className={styles.label}>
          {title}: {input}
        </label>
        {(isTextOrFile || isAgreement) && <p className={styles.error}>{error}</p>}
      </div>
    );
  };
}
