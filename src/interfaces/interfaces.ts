import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  styleBtn: 'manage' | 'status' | 'delete';
  type: 'button' | 'submit' | 'reset' | undefined;
}

export interface IInput {
  placeholder: string;
  name: string;
}
