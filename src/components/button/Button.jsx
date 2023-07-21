import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ icon, bgColor, color, border }) {
  return (
    <ButtonStyles bgColor={bgColor} color={color} border={border}>
      <img src={icon} alt='Icon' />
      <p>sign up</p>
    </ButtonStyles>
  );
}
