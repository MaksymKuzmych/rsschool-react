import React, { Component, RefObject } from 'react';

interface SelectCountryProps {
  forwardedRef: RefObject<HTMLSelectElement>;
}

import styles from './SelectCountry.module.css';

export class SelectCountry extends Component<SelectCountryProps> {
  render = () => {
    const countries = ['Ukraine', 'Russia', 'Belarus', 'Other country'];

    const countriesLayout = countries.map((country, index) => (
      <option value={country} key={index}>
        {country}
      </option>
    ));

    return (
      <label className={styles.label}>
        Country:
        <select name="country" id="country" ref={this.props.forwardedRef} defaultValue={'none'}>
          <option disabled value="none" style={{ display: 'none' }}>
            -- select an option --
          </option>
          {countriesLayout}
        </select>
      </label>
    );
  };
}
