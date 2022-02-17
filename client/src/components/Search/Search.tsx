import React, { FC, KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
import { TodoStore } from '@src/store';
import { observer } from 'mobx-react';
import { Input } from '../Input';
import { Btn } from '../Btn';
import { search, searchField, searchFilter } from './SearchStyle';

const Search: FC = observer(() => {
  const { query, setQuery, sortType, setSortType, todoFilter } = TodoStore;

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' ? todoFilter(query) : undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setSortType(name);
    todoFilter(query);
  };

  return (
    <div data-testid="search" css={search}>
      <Input
        placeholder="type to search and press Enter"
        css={searchField}
        name="search"
        type="text"
        handleKey={handleKey}
        handleChange={handleChange}
        value={query}
      />
      <div css={searchFilter}>
        <Btn
          handleClick={handleClick}
          styleBtn="manageBtn"
          name="all"
          data-testid="allBtn"
          isActive={sortType === 'all'}
        >
          All
        </Btn>

        <Btn
          handleClick={handleClick}
          styleBtn="manageBtn"
          name="active"
          data-testid="activeBtn"
          isActive={sortType === 'active'}
        >
          Active
        </Btn>

        <Btn
          handleClick={handleClick}
          styleBtn="manageBtn"
          name="done"
          data-testid="doneBtn"
          isActive={sortType === 'done'}
        >
          Done
        </Btn>
      </div>
    </div>
  );
});

export { Search };
