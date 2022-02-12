import React, { FC } from 'react';
import { input } from './InputStyle';
import { IInput } from '@src/interfaces';

const Input: FC<IInput> = ({ placeholder, name }) => {
  return (
    <input css={input} type="text" name={name} placeholder={placeholder} />
  );
};

export { Input };
