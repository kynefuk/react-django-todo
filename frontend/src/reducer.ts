import { Reducer } from "redux";
import { TodoAction, TodoActionType } from "./action/action";
import Todo from "./model/Todo";

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = { todos: [] };

const TodoReducer: Reducer<TodoState, TodoAction> = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD:
      // APIコール
      return { ...state };
    case TodoActionType.UPDATE:
      // APIコール
      return { ...state };
    case TodoActionType.DELETE:
      // APIコール
      return { ...state };
    case TodoActionType.DONE:
      //APIコール
      return { ...state };
    default:
      const _: never = action.type;
      return state;
  }
};

export default TodoReducer;
