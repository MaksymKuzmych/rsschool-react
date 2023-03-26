import React, { Component, RefObject } from 'react';

interface SelectCountryProps {
  forwardRef: RefObject<HTMLSelectElement>;
  error: string;
}

import styles from './SelectCountry.module.css';

export class SelectCountry extends Component<SelectCountryProps> {
  render = () => {
    const { error } = this.props;
    const countries = ['Ukraine', 'Russia', 'Belarus', 'Other country'];
    const countriesLayout = countries.map((country, index) => (
      <option value={country} key={index}>
        {country}
      </option>
    ));

    return (
      <div>
        <label className={styles.label}>
          Country:
          <select name="country" id="country" ref={this.props.forwardRef} defaultValue="">
            <option disabled value="" style={{ display: 'none' }}>
              -- select an option --
            </option>
            {countriesLayout}
          </select>
        </label>
        <p className={styles.error}>{error}</p>
      </div>
    );
  };
}
