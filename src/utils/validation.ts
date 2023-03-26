import { Component } from 'react';

import { FormState } from '../components/Form/Form';

export const validateRequired = (
  refValue: string | boolean | null,
  stateProp: string,
  context: Component<object, FormState>
) => {
  let error = '';

  if (!refValue) error = 'Required field';

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      [stateProp]: error,
    },
  }));

  return !!error;
};

export const validateText = (
  refValue: string,
  stateProp: string,
  context: Component<object, FormState>
) => {
  let error = '';
  const firstLetter = refValue[0];

  if (refValue.length < 2 || refValue.length > 10) error = 'Must contain 2-10 characters';

  if (refValue && firstLetter !== firstLetter.toLocaleUpperCase()) {
    error = 'First letter must be capitalized';
  }

  if (!refValue) error = 'Required field';

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      [stateProp]: error,
    },
  }));

  return !!error;
};

export const validateLang = (
  arr: (string | null)[],
  stateProp: string,
  context: Component<object, FormState>
) => {
  let error = '';

  if (!arr.length) error = 'Choose at least 1 language';

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      [stateProp]: error,
    },
  }));

  return !!error;
};

export const validateFile = (
  refValue: Blob | undefined,
  stateProp: string,
  context: Component<object, FormState>
) => {
  let error = '';

  if (!refValue?.type.includes('image')) error = 'Must be an image';

  if (!refValue) error = 'Required field';

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      [stateProp]: error,
    },
  }));

  return !!error;
};
