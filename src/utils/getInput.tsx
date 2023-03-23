import React from 'react';

import { CustomInputProps } from '../components/Form/CustomInput/CustomInput';

export const getInput = (inputInfo: CustomInputProps) => {
  const { type, title, name, forwardedRef } = inputInfo;

  switch (type) {
    case 'file':
    case 'text':
    case 'date':
      return <input type={type} ref={forwardedRef} />;
    case 'checkbox':
      return <input type={type} value={title} ref={forwardedRef} />;
    case 'radio':
      return <input type={type} value={title} name={name} ref={forwardedRef} />;
    default:
      return null;
  }
};
