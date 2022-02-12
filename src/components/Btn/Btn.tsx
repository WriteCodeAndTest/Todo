import React, { FC } from 'react';
import { IButton } from '@src/interfaces';
import { btn } from './BtnStyle';

const Btn: FC<IButton> = ({ children, type, styleBtn }) => {
  return (
    <button
      css={btn}
      className={styleBtn}
      data-testid="btn"
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export { Btn };
