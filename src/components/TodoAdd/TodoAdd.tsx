import React, { FC, KeyboardEvent, ChangeEvent } from 'react';
import { TodoStore } from '@src/store';
import { ITodos } from '@src/interfaces';
import { observer } from 'mobx-react';
import { todoAdd } from './TodoAddStyle';
import { Btn } from '../Btn';
import { Input } from '../Input';

const random = () => Math.floor(Math.random() * (1000 - 1) + 1);

const TodoAdd: FC = observer(() => {
  const { title, setTodos, setTitle } = TodoStore;

  const initialState: ITodos = {
    title,
    data: new Date().toLocaleDateString(),
    status: false,
    mark: false,
    id: `${random()}`,
  };

  const handleClick = () => {
    setTodos(initialState);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' ? setTodos(initialState) : undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  return (
    <>
      <div data-testid="todoAdd" css={todoAdd}>
        <Input
          placeholder="What needs to be done?"
          name="todoAdd"
          type="text"
          handleKey={handleKey}
          handleChange={handleChange}
          value={title}
          testid="todoAddField"
        />
        <Btn
          type="submit"
          styleBtn="manage"
          isDisabled={!title}
          handleClick={handleClick}
          testid="todoAddbtn"
        >
          Add
        </Btn>
      </div>
    </>
  );
});

export { TodoAdd };
