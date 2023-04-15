import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { User } from '../components/Users/User/User';
import { IUser } from '../interfaces/interfaces';

describe('User', () => {
  const user: IUser = {
    name: 'Maksym',
    surname: 'Kuzmych',
    birthday: '1997-01-01',
    country: 'Ukraine',
    languages: ['English', 'Ukrainian'],
    gender: 'Male',
    avatar: '',
  };

  it('Should renders the user name and surname', () => {
    render(<User user={user} />);
    expect(screen.getByText(`${user.name} ${user.surname}`)).toBeInTheDocument();
  });

  it('Should renders the user gender', () => {
    render(<User user={user} />);
    expect(screen.getByText(`Gender: ${user.gender}`)).toBeInTheDocument();
  });

  it('Should renders the user birthday', () => {
    render(<User user={user} />);
    expect(screen.getByText(`Birthday: ${user.birthday.toString()}`)).toBeInTheDocument();
  });

  it('Should renders the user country', () => {
    render(<User user={user} />);
    expect(screen.getByText(`Country: ${user.country}`)).toBeInTheDocument();
  });

  it('Should renders the user languages', () => {
    render(<User user={user} />);
    expect(screen.getByText('Languages:')).toBeInTheDocument();
    user.languages.forEach((lang) => {
      expect(screen.getByText(lang ? lang : '')).toBeInTheDocument();
    });
  });
});
