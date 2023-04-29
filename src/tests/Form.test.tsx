import React from 'react';
import { Provider } from 'react-redux';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { UserForm } from '../components/UserForm/UserForm';
import { initStore } from '../redux/store';

describe('Form', () => {
  const store = initStore();
  it('Should show validation errors when form is submitted with empty values', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    const addNewUserButton = screen.getByRole('button', { name: /add new user/i });

    fireEvent.click(addNewUserButton);

    expect(await screen.findAllByText(/Required field/i)).toHaveLength(7);
  });

  it('Should submit with valid form', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    URL.createObjectURL = vi.fn();

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
