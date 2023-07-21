import React from 'react';
import { RegistrationFormStyles } from './RegistrationForm.Styles';
import Form from '../../components/form/Form';
import illustration from '../../assets/svg/illustration.svg';
import logo from '../../assets/svg/logo.svg';
import FormValidator from './formValidator/FormValidator';

export default function RegistrationForm() {
  return (
    <RegistrationFormStyles>
      <div className='imageContainer'>
        <div className='illustrationContainer'>
          <img src={illustration} alt='Illustration' />
        </div>

        <img src={logo} alt='logo' id='logo' />
        <div className='overlay'></div>
      </div>
      <FormValidator>
        {(isFormValid, validateForm) => (
          <Form isFormValid={isFormValid} validateForm={validateForm} />
        )}
      </FormValidator>
    </RegistrationFormStyles>
  );
}
