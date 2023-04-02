import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Form } from '../components/Form/Form';

describe('Form', () => {
  it('Should shows validation errors when form is submitted with empty values', async () => {
    render(<Form addNewUser={() => {}} />);

    const addNewUserButton = screen.getByRole('button', { name: /add new user/i });

    fireEvent.click(addNewUserButton);

    (await screen.findAllByText(/Required field/i)).length === 7;
  });

  it('Should submits with valid form', async () => {
    render(<Form addNewUser={() => {}} />);

    const nameInput = screen.getByLabelText(/^name/i);
    const surnameInput = screen.getByLabelText(/surname/i);
    const birthdayInput = screen.getByLabelText(/birthday/i);
    const genderInputs = screen.getAllByRole('radio');
    const countrySelect = screen.getByLabelText(/Country/i);
    const languageENCheckbox = screen.getByLabelText(/english/i);
    const agreementCheckbox = screen.getByLabelText(/consent to the processing of personal data/i);
    const addNewUserButton = screen.getByRole('button', { name: /add new user/i });
    const avatarInput = screen.getByLabelText(/avatar/i);

    const file = new File([''], 'avatar.png', { type: 'image/png' });

    fireEvent.input(nameInput, { target: { value: 'Maksym' } });
    fireEvent.input(surnameInput, { target: { value: 'Kuzmych' } });
    fireEvent.input(birthdayInput, { target: { value: '1997-01-01' } });
    fireEvent.click(genderInputs[0]);
    fireEvent.change(countrySelect, { target: { value: ['Ukraine'] } });
    fireEvent.click(languageENCheckbox);
    fireEvent.click(agreementCheckbox);
    fireEvent.change(avatarInput, { target: { files: [file] } });
    fireEvent.click(addNewUserButton);

    await screen.findByText(/User has been successfully added!/i);
  });
});
