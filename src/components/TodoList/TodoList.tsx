import React, { FC, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import {
  todoListWrap,
  markStyle,
  todoStyle,
  controlBar,
  countStyle,
  todoDoneStyle,
  titleDoneStyle,
} from './TodoListStyle';
import { Btn } from '../Btn';

const TodoList: FC = observer(() => {
  const { query, renderTodos, deleteTodo, markTodo, setStatus, todoFilter } =
    TodoStore;

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
      todoFilter(query);
    }
  };

  return (
    <div css={todoListWrap} data-testid="todoList">
      {renderTodos.length ? (
        renderTodos.map(({ id, title, mark, status }, ind, arr) => {
          const count = arr.length - ind;
          let colorStatus = todoStyle;

          if (status) {
            colorStatus = todoDoneStyle;
          } else if (!status && mark) {
            colorStatus = markStyle;
          }

          return (
            <div
              aria-hidden="true"
              key={id}
              css={colorStatus}
              onClick={(e) => handleClickStatus(e, id)}
            >
              <div>
                <p css={countStyle}>{count}</p>
                <div css={status ? titleDoneStyle : ''}>{title}</div>
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
