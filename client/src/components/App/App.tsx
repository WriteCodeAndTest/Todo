import React, { FC, useEffect } from 'react';
import { TodoAdd } from '@components/TodoAdd';
import { Search } from '@components/Search';
import { TodoList } from '@components/TodoList';
import { GitLink } from '@components/GitLink';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { app, title, todosCount } from './AppStyle';

const App: FC<React.ReactNode> = observer(() => {
  const { active, done, getTodos } = TodoStore;

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div css={app}>
      <GitLink />
      <div css={title}>
        <h1>Todo list</h1>
        <p css={todosCount}>
          {active} more to do, {done} done
        </p>
      </div>
      <TodoAdd />
      <Search />
      <TodoList />
    </div>
  );
});

export { App };
