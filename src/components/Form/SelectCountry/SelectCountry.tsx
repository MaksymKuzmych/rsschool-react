import React, { memo } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from './SelectCountry.module.css';

const countries = ['Ukraine', 'Russia', 'Belarus', 'Other country'];

interface SelectCountryProps {
  register: UseFormRegisterReturn<string>;
  error: FieldError | undefined;
}

export const SelectCountry = memo(({ register, error }: SelectCountryProps) => {
  const countriesLayout = countries.map((country, index) => (
    <option value={country} key={index}>
      {country}
    </option>
  ));

  return (
    <div>
      <label className={styles.label}>
        Country:
        <select {...register} defaultValue="">
          <option disabled value="" style={{ display: 'none' }}>
            -- select an option --
          </option>
          {countriesLayout}
        </select>
      </label>
      <p className={styles.error}>{error && error.message}</p>
    </div>
  );
});
