import { Todo } from '../model/Todo';

export enum TodoActionType {
  LIST = 'LIST',
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  DONE = 'DONE',
}

export interface TodoAction {
  type: TodoActionType;
  payload?: Todo[];
}
