import React, { useState, useEffect } from 'react';
import { FormStyles } from './Form.Styles';
import Button from '../button/Button';
import fbIcon from '../../assets/svg/fbIcon.svg';
import Input from './input/Input';
import google from '../../assets/svg/google.svg';
import userIcon from '../../assets/svg/user-solid.svg';
import lockIcon from '../../assets/svg/lock-solid.svg';
import envelopeIcon from '../../assets/svg/envelope-solid.svg';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    setIsNameValid(name.trim() !== '');
    setIsEmailValid(email.trim() !== '');
    setIsPasswordValid(password.trim() !== '');
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNameValid && isEmailValid && isPasswordValid) {
      console.log('Form submitted:', { name, email, password });

      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all the fields.');
    }
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <h1>Get Started</h1>
      <p>Already have an account?</p>
      <a href=''>sign in</a>
      <div className='btnContainer'>
        <Button icon={google} text={'sign up'} />
        <Button
          icon={fbIcon}
          text={'sign up'}
          bgColor={'#4F70B5'}
          border={'1px solid  #4F70B5'}
          color={'white'}
        />
      </div>

      <h2>Or</h2>
      <Input
        className={'coloredInput'}
        icon={userIcon}
        label={'Name'}
        type={'text'}
        placeholder={'John Doe'}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        icon={envelopeIcon}
        label={'Email'}
        type={'text'}
        placeholder={'abc@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        icon={lockIcon}
        label={'Password'}
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input type='submit' value='Submit' id='submit' />
    </FormStyles>
  );
}
