import { RefObject } from 'react';

export const getLanguages = (langRefArray: RefObject<HTMLInputElement>[]) => {
  return langRefArray
    .map((lang) => (lang.current?.checked ? lang.current.value : null))
    .filter((element) => element !== null);
};
