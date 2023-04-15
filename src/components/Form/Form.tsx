import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { IUserFormData } from '../../interfaces/interfaces';
import { textValid, requiredValid, langValid, fileValid } from '../../utils/validation';
import { CustomInput } from './CustomInput/CustomInput';
import { SelectCountry } from './SelectCountry/SelectCountry';
import { addNewUser } from '../../redux/slice/usersSlice';

import styles from './Form.module.css';

const languages = ['English', 'Russian', 'Ukrainian'];
const genders = ['male', 'female'];

export const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm<IUserFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    shouldUseNativeValidation: false,
  });

  const onSubmit = handleSubmit((data) => {
    if (data.avatar) {
      setIsSuccess(true);
      const avatarFile = data.avatar[0];
      const avatarUrl = URL.createObjectURL(avatarFile);
      const userData = { ...data, avatar: avatarUrl };
      dispatch(addNewUser(userData));
    }
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  const languagesLayout = languages.map((language, idx) => {
    return (
      <CustomInput
        type="checkbox"
        register={register('languages', langValid)}
        value={language}
        key={idx}
      />
    );
  });

  const gendersLayout = genders.map((gender, idx) => (
    <CustomInput
      type="radio"
      register={register('gender', requiredValid)}
      value={gender}
      key={idx}
    />
  ));

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <CustomInput register={register('name', textValid)} error={errors.name} />
          <CustomInput register={register('surname', textValid)} error={errors.surname} />
        </div>
        <CustomInput
          type="date"
          register={register('birthday', requiredValid)}
          error={errors.birthday}
        />
        <h3 className={styles.formGroupTitle}>Gender</h3>
        <div className={styles.formGroup}>{gendersLayout}</div>
        <p className={styles.error}>{errors?.gender && errors.gender.message}</p>
        <SelectCountry register={register('country', requiredValid)} error={errors.country} />
        <CustomInput
          type="checkbox"
          title="Consent to the processing of personal data"
          register={register('agreement', requiredValid)}
          error={errors.agreement}
        />
        <h3 className={styles.formGroupTitle}>Languages you speak</h3>
        <div className={styles.formGroup}>{languagesLayout}</div>
        <p className={styles.error}>{errors?.languages && errors.languages.message}</p>
        <CustomInput type="file" register={register('avatar', fileValid)} error={errors.avatar} />
        <input type="submit" value="Add new user" className={styles.submit} />
      </form>
      {isSuccess && (
        <div className={styles.modal} onClick={() => setIsSuccess(false)}>
          <p>User has been successfully added!</p>
        </div>
      )}
    </>
  );
};
