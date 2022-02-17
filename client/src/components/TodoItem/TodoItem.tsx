import React, { FC, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { Btn } from '../Btn';
import { ITodoItem } from '@src/interfaces';
import {
  controlBar,
  countStyle,
  titleDoneStyle,
  markStyle,
  todoStyle,
  todoDoneStyle,
} from './TodoItemStyle';

const TodoItem: FC<ITodoItem> = observer(
  ({ id, title, mark, status, count }) => {
    const { query, deleteTodo, markTodo, setStatus, todoFilter } = TodoStore;

    let colorStatus = todoStyle;

    if (status) {
      colorStatus = todoDoneStyle;
    } else if (!status && mark) {
      colorStatus = markStyle;
    }

    const handleClickDel = () => {
      deleteTodo(id);
    };

    const handleClickMark = () => {
      markTodo(id);
    };

    const handleClickStatus = (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as typeof e.target & {
        getAttribute: (a: string) => string;
      };

      if (target.getAttribute && target.getAttribute('class') !== 'mark') {
        setStatus(id);
        todoFilter(query);
      }
    };

    return (
      <div
        aria-hidden="true"
        key={id}
        css={colorStatus}
        onClick={(e) => handleClickStatus(e)}
      >
        <div>
          <p css={countStyle}>{count}</p>
          <div css={status ? titleDoneStyle : ''}>{title}</div>
        </div>
        <div css={controlBar}>
          <Btn
            handleClick={() => handleClickDel()}
            styleBtn="delete"
            name="delete"
            data-testid="deleteBtn"
          >
            Delete
          </Btn>
          <Btn
            handleClick={() => handleClickMark()}
            styleBtn="mark"
            name="mark"
            data-testid="markBtn"
          >
            {mark ? 'UnMark' : 'Mark'}
          </Btn>
        </div>
      </div>
    );
  },
);

export { TodoItem };
