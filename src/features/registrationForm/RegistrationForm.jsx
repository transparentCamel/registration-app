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
        <img src={logo} alt='logo' id='logo' />
        <img src={illustration} alt='Illustration' />
        <div className='messageContainer'>
          <h2>Start for free & Get Attractive offers Today !</h2>
        </div>
      </div>
      <FormValidator>
        {(isFormValid, validateForm) => (
          <Form isFormValid={isFormValid} validateForm={validateForm} />
        )}
      </FormValidator>
    </RegistrationFormStyles>
  );
}
