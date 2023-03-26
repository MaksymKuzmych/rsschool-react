import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CustomInput, CustomInputProps } from '../components/Form/CustomInput/CustomInput';

describe('Custom Input', () => {
  let mockProps: CustomInputProps;

  beforeEach(() => {
    mockProps = {
      type: 'text',
      title: 'Name',
      name: 'name',
      forwardRef: { current: null },
      error: '',
    };
  });

  it('Should render the component correctly', () => {
    render(<CustomInput {...mockProps} />);
    const inputElement = screen.getByLabelText('Name:');
    expect(inputElement).toBeInTheDocument();
  });

  it('Should render the input with correct props', () => {
    render(<CustomInput {...mockProps} />);
    const inputElement = screen.getByLabelText('Name:');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('Should render the label with correct text', () => {
    render(<CustomInput {...mockProps} />);
    const labelElement = screen.getByText('Name:');
    expect(labelElement).toBeInTheDocument();
  });

  it('Should render the error message', () => {
    const error = 'Required field';
    mockProps.error = error;
    render(<CustomInput {...mockProps} />);
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});
