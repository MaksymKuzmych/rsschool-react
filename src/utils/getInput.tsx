import React from 'react';

import { CustomInputProps } from '../components/Form/CustomInput/CustomInput';

export const getInput = (inputInfo: CustomInputProps) => {
  const { type, title, name, forwardRef } = inputInfo;

  switch (type) {
    case 'file':
    case 'text':
    case 'date':
      return <input type={type} ref={forwardRef} />;
    case 'checkbox':
      return <input type={type} value={title} ref={forwardRef} />;
    case 'radio':
      return <input type={type} value={title} name={name} ref={forwardRef} />;
    default:
      return null;
  }
};
