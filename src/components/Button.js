import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

const Button = ({ label, onClick, className, type = 'Submit' }) => {
  return (
    <PrimeButton label={label} onClick={onClick} className={`mr-2 ${className} bg-green-500 text-white hover:bg-green-600`}
    type={type}/>
  );
};

export default Button;

