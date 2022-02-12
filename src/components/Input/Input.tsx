import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { input } from './InputStyle';
import { TodoStore } from '@src/store';
import { IInput } from '@src/interfaces';
import { v4 as uuid } from 'uuid';

const Input: FC<IInput> = observer(({ placeholder, name }) => {
  const { title, setTitle, setTodos } = TodoStore;

  return (
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) =>
        e.key === 'Enter'
          ? setTodos({
              title,
              data: new Date().toLocaleDateString(),
              status: false,
              notice: false,
              id: uuid(),
            })
          : undefined
      }
      data-testid="input"
      css={input}
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
});

export { Input };
