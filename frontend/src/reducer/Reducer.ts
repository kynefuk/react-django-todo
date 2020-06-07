import { TodoAction, TodoActionType } from '../action';
import { Todo } from '../model/Todo';
import React from 'react';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const TodoReducer: React.Reducer<TodoState, TodoAction> = (
  state: TodoState,
  action: TodoAction
) => {
  switch (action.type) {
    case TodoActionType.LIST:
      state.todos.push(...action.payload!);

      return { ...state };
    case TodoActionType.ADD:
      state.todos.push(...action.payload!);
      return { ...state };
    case TodoActionType.UPDATE:
      // APIコール
      return { ...state };
    case TodoActionType.DELETE:
      const deleted = state.todos.filter(
        (todo) => todo.props.id !== action.payload![0].props.id
      );
      state.todos = deleted;
      return { ...state };
    default:
      const _: never = action.type;
      return state;
  }
};
