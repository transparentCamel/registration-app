import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ icon, bgColor, color, border }) {
  return (
    <ButtonStyles bgColor={bgColor} color={color} border={border}>
      <span>
        <img className='signUpIcons' src={icon} alt='Icon' />
      </span>

      <p>sign up</p>
    </ButtonStyles>
  );
}
