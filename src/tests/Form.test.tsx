import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Form } from '../components/Form/Form';

describe('Form', () => {
  it('Should shows validation errors when form is submitted with empty values', () => {
    const addNewUserMock = () => {};
    render(<Form addNewUser={addNewUserMock} />);
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getAllByText('Required field')).toHaveLength(7);
  });
});
