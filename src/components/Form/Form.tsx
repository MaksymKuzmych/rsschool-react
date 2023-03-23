import React, { Component, createRef, FormEvent, RefObject } from 'react';

import { CustomInput } from './CustomInput/CustomInput';
import { SelectCountry } from './SelectCountry/SelectCountry';
import { getLanguages } from '../../utils/getLanguages';
import { getGender } from '../../utils/getGender';
import { IUser } from '../../interfaces/interfaces';

import styles from './Form.module.css';

interface FormProps {
  addNewUser: (user: IUser) => void;
}

export class Form extends Component<FormProps> {
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

    const languagesRefs = [this.langEN, this.langRU, this.langUA];
    const genderRefs = [this.male, this.female];
    const languages: (string | undefined)[] = getLanguages(languagesRefs);
    const gender: string | null = getGender(genderRefs);
    const newUser = {
      name: this.name.current?.value,
      surname: this.surname.current?.value,
      birthday: this.birthday.current?.value,
      country: this.country.current?.value,
      languages,
      gender,
      file: this.file.current?.files?.[0],
    };

    this.props.addNewUser(newUser);
    this.form.current?.reset();
  };

  render = () => (
    <form className={styles.form} onSubmit={this.handleSubmit} ref={this.form}>
      <div className={styles.formGroup}>
        <CustomInput type="text" title="Name" forwardedRef={this.name} />
        <CustomInput type="text" title="Surname" forwardedRef={this.surname} />
      </div>
      <CustomInput type="date" title="Birthday" forwardedRef={this.birthday} />
      <h3 className={styles.formGroupTitle}>Gender</h3>
      <div className={styles.formGroup}>
        <CustomInput type="radio" title="Male" name="gender" forwardedRef={this.male} />
        <CustomInput type="radio" title="Female" name="gender" forwardedRef={this.female} />
      </div>
      <SelectCountry forwardedRef={this.country} />
      <CustomInput
        type="checkbox"
        title="Consent to the processing of personal data"
        forwardedRef={this.agreement}
      />
      <h3 className={styles.formGroupTitle}>Languages you speak</h3>
      <div className={styles.formGroup}>
        <CustomInput type="checkbox" title="English" forwardedRef={this.langEN} />
        <CustomInput type="checkbox" title="Russian" forwardedRef={this.langRU} />
        <CustomInput type="checkbox" title="Ukrainian" forwardedRef={this.langUA} />
      </div>
      <CustomInput type="file" title="Avatar" forwardedRef={this.file} />
      <input type="submit" value="Add new user" className={styles.submit} />
    </form>
  );
}
