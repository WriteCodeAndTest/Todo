import React, { FC, KeyboardEvent, ChangeEvent } from 'react';
import { TodoStore } from '@src/store';
import { IState } from '@src/interfaces';
import { observer } from 'mobx-react';
import { todoAdd } from './TodoAddStyle';
import { Btn } from '../Btn';
import { Input } from '../Input';

const TodoAdd: FC = observer(() => {
  const { title, setTodos, setTitle } = TodoStore;

  const initialState: IState = {
    title,
    data: new Date().toLocaleDateString(),
    status: false,
    mark: false,
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
          styleBtn="manageBtn"
          isDisabled={!title}
          handleClick={handleClick}
          testid="todoAddBtn"
        >
          Add
        </Btn>
      </div>
    </>
  );
});

export { TodoAdd };
