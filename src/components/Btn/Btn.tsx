import React, { FC } from 'react';
import { IButton } from '@src/interfaces';

const Btn: FC<IButton> = ({ children, type, styleBtn }) => {
  return (
    <button className={styleBtn} data-testid="btn" type={type || 'button'}>
      {children}
    </button>
  );
};

export { Btn };
