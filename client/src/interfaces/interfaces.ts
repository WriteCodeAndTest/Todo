import { KeyboardEvent, ChangeEvent, MouseEvent } from 'react';

export interface IButton {
  styleBtn: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  name?: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  testid?: string;
}

export interface IInput {
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKey?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  className?: string;
  testid?: string;
}

export interface ITodos {
  title: string;
  data: string;
  status: boolean;
  mark: boolean;
  _id?: string;
  id: string;
}

export interface IState {
  title: string;
  data: string;
  status: boolean;
  mark: boolean;
  _id?: string;
  id?: string;
}

export interface ITodosRequest {
  title?: string;
  data?: string;
  status?: boolean;
  mark?: boolean;
  _id?: string;
  id?: string;
}

export interface ITodoItem {
  id: string;
  title: string;
  status: boolean;
  mark: boolean;
  count: number;
}
