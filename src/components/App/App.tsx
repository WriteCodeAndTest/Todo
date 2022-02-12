import React, { FC } from 'react';
import { TodoAdd } from '@components/TodoAdd';
import { app } from './AppStyle';

const App: FC<React.ReactNode> = () => {
  return (
    <div css={app}>
      <TodoAdd />
    </div>
  );
};

export { App };
