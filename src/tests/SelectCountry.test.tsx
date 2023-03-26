import React, { RefObject } from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SelectCountry } from '../components/Form/SelectCountry/SelectCountry';

describe('SelectCountry', () => {
  it('Should renders without crashing', () => {
    const ref: RefObject<HTMLSelectElement> = { current: null };
    render(<SelectCountry forwardRef={ref} error="" />);
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  });

  it('Should displays an error message if an error prop is provided', () => {
    const ref: RefObject<HTMLSelectElement> = { current: null };
    render(<SelectCountry forwardRef={ref} error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('Should displays all available countries as options', () => {
    const ref: RefObject<HTMLSelectElement> = { current: null };
    render(<SelectCountry forwardRef={ref} error="" />);
    const countrySelect = screen.getByLabelText('Country:') as HTMLSelectElement;
    expect(countrySelect.children).toHaveLength(5);
    expect(countrySelect.children[1]).toHaveValue('Ukraine');
    expect(countrySelect.children[2]).toHaveValue('Russia');
    expect(countrySelect.children[3]).toHaveValue('Belarus');
    expect(countrySelect.children[4]).toHaveValue('Other country');
  });

  it('Should sets the value of the select input when an option is selected', () => {
    const ref: RefObject<HTMLSelectElement> = { current: null };
    render(<SelectCountry forwardRef={ref} error="" />);
    const countrySelect = screen.getByLabelText('Country:') as HTMLSelectElement;
    const ukraineOption = countrySelect.children[1] as HTMLOptionElement;
    ukraineOption.selected = true;
    expect(countrySelect).toHaveDisplayValue('Ukraine');
  });
});
