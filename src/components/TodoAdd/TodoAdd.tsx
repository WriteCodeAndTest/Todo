import React, { FC } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { todoAdd } from './TodoAddStyle';
import { Btn } from '../Btn';
import { Input } from '../Input';
import { v4 as uuid } from 'uuid';

const TodoAdd: FC = observer(() => {
  const { title, setTodos } = TodoStore;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos({
      title,
      data: new Date().toLocaleDateString(),
      status: false,
      notice: false,
      id: uuid(),
    });
  };

  return (
    <>
      <form data-testid="todoAdd" css={todoAdd} onSubmit={handleSubmit}>
        <Input placeholder="What needs to be done?" name="todoAdd" />
        <Btn type="submit" styleBtn="manage">
          Add
        </Btn>
      </form>
    </>
  );
});

export { TodoAdd };
