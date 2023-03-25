import React, { Component, createRef, FormEvent, RefObject } from 'react';

import { CustomInput } from './CustomInput/CustomInput';
import { SelectCountry } from './SelectCountry/SelectCountry';
import { getLanguages } from '../../utils/getLanguages';
import { getGender } from '../../utils/getGender';
import { IUser } from '../../interfaces/interfaces';
import { validateFile, validateText, validateLang, validateRequired } from '../../utils/validation';

import styles from './Form.module.css';

interface FormProps {
  addNewUser: (user: IUser) => void;
}

export interface FormState {
  nameError: string;
  surnameError: string;
  birthdayError: string;
  countryError: string;
  agreementError: string;
  languageError: string;
  genderError: string;
  fileError: string;
}

const defaultState: FormState = {
  nameError: '',
  surnameError: '',
  birthdayError: '',
  countryError: '',
  agreementError: '',
  languageError: '',
  genderError: '',
  fileError: '',
};

export class Form extends Component<FormProps> {
  state: FormState = { ...defaultState };

  form: RefObject<HTMLFormElement> = createRef();
  name: RefObject<HTMLInputElement> = createRef();
  surname: RefObject<HTMLInputElement> = createRef();
  birthday: RefObject<HTMLInputElement> = createRef();
  country: RefObject<HTMLSelectElement> = createRef();
  agreement: RefObject<HTMLInputElement> = createRef();
  langEN: RefObject<HTMLInputElement> = createRef();
  langRU: RefObject<HTMLInputElement> = createRef();
  langUA: RefObject<HTMLInputElement> = createRef();
  male: RefObject<HTMLInputElement> = createRef();
  female: RefObject<HTMLInputElement> = createRef();
  file: RefObject<HTMLInputElement> = createRef();

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { addNewUser } = this.props;

    this.setState({ ...defaultState });

    const name = this.name.current?.value || '';
    const surname = this.surname.current?.value || '';
    const birthday = this.birthday.current?.value || '';
    const country = this.country.current?.value || '';
    const agreement = this.agreement.current?.checked || false;
    const file = this.file.current?.files?.[0];
    const languagesRefs = [this.langEN, this.langRU, this.langUA];
    const languages: (string | null)[] = getLanguages(languagesRefs);
    const genderRefs = [this.male, this.female];
    const gender: string | null = getGender(genderRefs);

    const validateForm = [
      validateText(name, 'nameError', this),
      validateText(surname, 'surnameError', this),
      validateRequired(birthday, 'birthdayError', this),
      validateRequired(agreement, 'agreementError', this),
      validateRequired(country, 'countryError', this),
      validateLang(languages, 'languageError', this),
      validateRequired(gender, 'genderError', this),
      validateFile(file, 'fileError', this),
    ].includes(true);

    if (!validateForm) {
      const newUser = {
        name,
        surname,
        birthday,
        country,
        languages,
        gender,
        file,
      };

      addNewUser(newUser);
      this.form.current?.reset();
    }
  };

  render = () => {
    const {
      nameError,
      surnameError,
      birthdayError,
      countryError,
      agreementError,
      genderError,
      languageError,
      fileError,
    } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit} ref={this.form} noValidate>
        <div className={styles.formGroup}>
          <CustomInput type="text" title="Name" forwardRef={this.name} error={nameError} />
          <CustomInput type="text" title="Surname" forwardRef={this.surname} error={surnameError} />
        </div>
        <CustomInput
          type="date"
          title="Birthday"
          forwardRef={this.birthday}
          error={birthdayError}
        />
        <h3 className={styles.formGroupTitle}>Gender</h3>
        <div>
          <div className={styles.formGroup}>
            <CustomInput type="radio" title="Male" name="gender" forwardRef={this.male} />
            <CustomInput type="radio" title="Female" name="gender" forwardRef={this.female} />
          </div>
          <p className={styles.error}>{genderError}</p>
        </div>
        <SelectCountry forwardRef={this.country} error={countryError} />
        <CustomInput
          type="checkbox"
          title="Consent to the processing of personal data"
          forwardRef={this.agreement}
          error={agreementError}
        />
        <h3 className={styles.formGroupTitle}>Languages you speak</h3>
        <div>
          <div className={styles.formGroup}>
            <CustomInput type="checkbox" title="English" forwardRef={this.langEN} />
            <CustomInput type="checkbox" title="Russian" forwardRef={this.langRU} />
            <CustomInput type="checkbox" title="Ukrainian" forwardRef={this.langUA} />
          </div>
          <p className={styles.error}>{languageError}</p>
        </div>
        <CustomInput type="file" title="Avatar" forwardRef={this.file} error={fileError} />
        <input type="submit" value="Add new user" className={styles.submit} />
      </form>
    );
  };
}
