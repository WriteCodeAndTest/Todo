import React, { FC } from 'react';
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
  ({
    id,
    title,
    mark,
    status,
    count,
    handleClickDel,
    handleClickMark,
    handleClickStatus,
  }) => {
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
        onClick={(e) => handleClickStatus(e)}
      >
        <div>
          <p css={countStyle}>{count}</p>
          <div css={status ? titleDoneStyle : ''}>{title}</div>
        </div>
        <div css={controlBar}>
          <Btn
            handleClick={() => handleClickDel()}
            styleBtn="deleteBtn"
            name="delete"
            data-testid="deleteBtn"
          >
            Delete
          </Btn>
          <Btn
            handleClick={() => handleClickMark()}
            styleBtn="markBtn"
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
