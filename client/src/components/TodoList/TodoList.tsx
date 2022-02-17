import React, { FC } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { Loader } from '@components/Loader';
import { Message } from '@components/Message';
import { TodoItem } from '@components/TodoItem';

import { todoListWrap } from './TodoListStyle';

const TodoList: FC = observer(() => {
  const { renderTodos } = TodoStore;

  return (
    <>
      <div css={todoListWrap} data-testid="todoList">
        {renderTodos.length
          ? [...renderTodos]
              .reverse()
              .map(({ id, title, mark, status }, ind, arr) => {
                const count = arr.length - ind;

                return (
                  <TodoItem
                    key={id}
                    id={id}
                    title={title}
                    mark={mark}
                    status={status}
                    count={count}
                  />
                );
              })
          : null}
      </div>
      <Message>Add todo</Message>
      <Loader />
    </>
  );
});

export { TodoList };
