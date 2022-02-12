import React, { FC } from 'react';
import { todoAdd } from './TodoAddStyle';
import { Btn } from '../Btn';
import { Input } from '../Input';

const TodoAdd: FC = () => {
  return (
    <form css={todoAdd}>
      <Input placeholder="What needs to be done?" name="todoAdd" />
      <Btn type="submit" styleBtn="manage">
        Add
      </Btn>
    </form>
  );
};

export { TodoAdd };
