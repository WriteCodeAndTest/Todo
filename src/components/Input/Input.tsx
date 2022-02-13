import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { input } from './InputStyle';
import { IInput } from '@src/interfaces';

const Input: FC<IInput> = observer(
  ({ value, placeholder, name, handleKey, handleChange, className }) => {
    return (
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        data-testid="input"
        css={input}
        type="text"
        name={name}
        placeholder={placeholder}
        className={className}
      />
    );
  },
);

export { Input };
