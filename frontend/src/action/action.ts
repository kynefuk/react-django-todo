export enum TodoActionType {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  DONE = "DONE",
}

export interface TodoAction {
  type: TodoActionType;
  uuid?: string;
  title?: string;
  done?: boolean;
}

export const addTodo = (title: string): TodoAction => ({
  type: TodoActionType.ADD,
  title,
});

export const updateTodo = (
  uuid: string,
  title: string,
  done: boolean
): TodoAction => ({
  type: TodoActionType.DELETE,
  uuid,
  title,
  done,
});

export const deleteTodo = (uuid: string): TodoAction => ({
  type: TodoActionType.DELETE,
  uuid,
});

export const doneTodo = (uuid: string): TodoAction => ({
  type: TodoActionType.DONE,
  uuid,
});
