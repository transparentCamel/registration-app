import { useState } from 'react';

export default function FormValidator({ children }) {
  const [isFormValid, setIsFormValid] = useState(true);

  const validateForm = (fields) => {
    const areAllFieldsFilled = Object.values(fields).every(
      (field) => field.trim() !== ''
    );
    setIsFormValid(areAllFieldsFilled);
  };

  return children(isFormValid, validateForm);
}
