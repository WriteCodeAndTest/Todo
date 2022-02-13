import React, { FC } from 'react';
import { IButton } from '@src/interfaces';

const Btn: FC<IButton> = ({
  children,
  type,
  styleBtn,
  name,
  handleClick,
  isDisabled,
  isActive,
}) => {
  return (
    <button
      className={isActive ? `${styleBtn} active` : styleBtn}
      data-testid="btn"
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
