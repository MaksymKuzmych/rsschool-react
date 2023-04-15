import React, { memo } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from './CustomInput.module.css';

interface CustomInputProps {
  type?: string;
  title?: string;
  value?: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const CustomInput = memo(
  ({ type = 'text', title, value, register, error }: CustomInputProps) => {
    const isCorrectType = type === 'text' || type === 'file' || type === 'date';
    const isAgreement = title === 'Consent to the processing of personal data';

    return (
      <div>
        <label className={styles.label}>
          <span className={styles.title}>{title || value || register.name}: </span>
          <input type={type} {...register} value={value} autoComplete="nope" />
        </label>
        {(isCorrectType || isAgreement) && <p className={styles.error}>{error && error.message}</p>}
      </div>
    );
  }
);
