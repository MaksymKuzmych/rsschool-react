export const textValid = {
  required: 'Required field',
  minLength: {
    value: 2,
    message: 'Must contain at least 2 characters',
  },
  maxLength: {
    value: 10,
    message: 'Must contain less than 10 characters',
  },
  pattern: {
    value: /[A-Z][a-z]*/g,
    message: 'First letter must be capitalized',
  },
};

export const requiredValid = {
  required: 'Required field',
};

export const langValid = {
  required: 'Choose at least one language',
};

export const fileValid = {
  validate: {
    notEmpty: (value: FileList | undefined) => {
      return (value && value.length > 0) || 'Required Field';
    },
    typeImg: (value: FileList | undefined) => {
      return (value && value.length > 0 && value[0].type.startsWith('image')) || 'Must be an image';
    },
  },
};
