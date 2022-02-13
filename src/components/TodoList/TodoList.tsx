import React, { FC, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import {
  todoListWrap,
  bold,
  todoStyle,
  controlBar,
  countStyle,
  done,
} from './TodoListStyle';
import { Btn } from '../Btn';

const TodoList: FC = observer(() => {
  const { renderTodos, deleteTodo, markTodo, setStatus } = TodoStore;

  const handleClickDel = (id: string) => {
    deleteTodo(id);
  };

  const handleClickMark = (id: string) => {
    markTodo(id);
  };

  const handleClickStatus = (e: MouseEvent<HTMLDivElement>, id: string) => {
    const target = e.target as typeof e.target & {
      getAttribute: (a: string) => string;
    };

    if (target.getAttribute && target.getAttribute('class') !== 'mark') {
      setStatus(id);
    }
  };

  return (
    <div css={todoListWrap} data-testid="todoList">
      {renderTodos.length ? (
        renderTodos.map(({ id, title, mark, status }, ind, arr) => {
          const count = arr.length - ind;

          return (
            <div
              aria-hidden="true"
              key={id}
              css={mark ? bold : todoStyle}
              onClick={(e) => handleClickStatus(e, id)}
            >
              <div>
                <p css={countStyle}>{count}</p>
                <div css={status ? done : ''}>{title}</div>
              </div>
              <div css={controlBar}>
                <Btn
                  handleClick={() => handleClickDel(id)}
                  styleBtn="delete"
                  name="delete"
                  data-testid="deleteBtn"
                >
                  Delete
                </Btn>
                <Btn
                  handleClick={() => handleClickMark(id)}
                  styleBtn="mark"
                  name="mark"
                  data-testid="markBtn"
                >
                  {mark ? 'UnMark' : 'Mark'}
                </Btn>
              </div>
            </div>
          );
        })
      ) : (
        <div>Add todo</div>
      )}
    </div>
  );
});

export { TodoList };
