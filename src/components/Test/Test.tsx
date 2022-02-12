import React, { FC } from 'react';
import { test } from './TestStyle';

const Test: FC = () => {
  return (
    <div css={test} data-testid="wrapper">
      Test test
    </div>
  );
};

export { Test };
