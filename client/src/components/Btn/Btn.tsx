import React, { FC } from 'react';
import { IButton } from '@src/interfaces';
import * as btn from './BtnStyle';

interface LooseObject {
  [key: string]: any;
}

const Btn: FC<IButton> = ({
  children,
  type,
  styleBtn,
  name,
  handleClick,
  isDisabled,
  isActive,
  testid,
}) => {
  const typedObj: LooseObject = btn;

  return (
    <button
      css={
        isActive
          ? [typedObj[`${styleBtn}`], btn.active]
          : typedObj[`${styleBtn}`]
      }
      data-testid={testid}
      type={type || 'button'}
      name={name}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export { Btn };
